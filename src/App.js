import React, { useState, useEffect } from "react";
import axios from "axios";
import "./tailwind.generated.css";
import Block from "./Block";

//
function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([""]);
  //const [filter, setFilter] = useState("/");

  useEffect(() => {
    var config = {
      headers: { "Access-Control-Allow-Origin": "*" },
    };

    const fetchData = async () => {
      const result = await axios(
        "https://cors-anywhere.herokuapp.com/https://work.unimi.it/foProssimiEsami/json/F94",
        config
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  function clear(item) {
    var result = title.map((element) =>{

    return (
      item.descrIns.toLowerCase().includes(element) ||
      item.appelli[0].docente.nome.toLowerCase().includes(element) ||
      item.appelli[0].docente.cognome.toLowerCase().includes(element)
    );
    })

    return result.some((item) => item);
  }

  return (
    <div className="">
      <div className="w-full h-10 px-4 my-6">
      {/* <input
          className="w-full h-full border py-2 px-4 rounded-lg shadow"

          onChange={(event) => setFilter("/" + event.target.value.toLowerCase())}
        /> */}
        <input
          className="w-full  h-full border py-2 px-4 rounded-lg shadow"
          onChange={(event) => setTitle(event.target.value.toLowerCase().split("&"))}
        />
      </div>
      <div className="flex flex-wrap p-3">
        {data
          .filter((item) => clear(item))
          .map((item) => {
            return (
              <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full  p-3" key={item.codW4}>

                <div className="border w-full h-full p-4 rounded-lg shadow">
                  <p className="font-medium text-lg mb-1">{item.descrIns}</p>
                  <p className="text-sm mb-5">
                    {item.appelli[0].docente.nome}{" "}
                    {item.appelli[0].docente.cognome}
                  </p>
                <Block item={item ?? []} ></Block>
                </div>

              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
