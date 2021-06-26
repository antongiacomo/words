import React, { useState, useEffect } from "react";
import Flippy, { FrontSide } from "react-flippy";
import Autocomplete from "./Autocomplete";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
function NewItemCard({ word, handleWord, handleLoaded }) {
  const baseUrl = window.$baseUrl;
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const { addToast } = useToasts();

  const handleQ = (word) => {
    setQ(word);
    handleWord(word);
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.wordreference.com/2012/autocomplete/autocomplete.aspx?dict=iten&query=${q}`
      );

      setData(
        result.data
          .split("\n")
          .map((r) => r.split("\t")[0])
          .filter((e) => e.length > 0)
      );
    };

    fetchData();
  }, [q]);

  return (
    <>
      <Flippy flipOnClick={false} flipDirection="horizontal">
        <FrontSide
          className="flex items-center justify-center  w-full h-full p-4 rounded-lg shadow uppercase text-2xl"

          style={{ height: "300px" , backgroundColor: "#1a202c" }}
        >
          <form className="w-full max-w-sm">
            <div className="flex items-center  border-b-2 border-teal-500 py-2" >
              <input
                className="hidden appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                onChange={(event) =>
                  handleWord(event.target.value.toLowerCase())
                }
                value={word}
              />

              <Autocomplete
                aria-label="Word"
                suggestions={data}
                value={q}
                placeholder="Cerca"
                className=" h-full border  appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                onChange={(e) => handleQ(e.target.value)}
                onSelect={(e) => handleQ(e)}
              ></Autocomplete>

              <button
                onClick={() =>
                  axios(baseUrl + "add?word=" + word).then((response) => {
                    addToast(word + " Saved Successfully", {
                      appearance: "success",
                    });
                    handleLoaded(response);
                    handleQ("");
                  }).catch(error => {
                    alert("woops")

                  })
                }
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-2 text-white py-1 px-2 rounded"
                type="button"
              >
                Add
              </button>
              <button
                className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                type="button"
                onClick={() => handleQ("")}
              >
                Cancel
              </button>
            </div>
          </form>
        </FrontSide>
      </Flippy>
    </>
  );
}
export default NewItemCard;
