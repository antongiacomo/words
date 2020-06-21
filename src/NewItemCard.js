import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import axios from "axios";

function NewItemCard({ word,handleWord,handleLoaded }) {
  const baseUrl = window.$baseUrl;
  return (
    <Flippy flipOnClick={false} flipDirection="horizontal">
    <FrontSide
      className="flex items-center justify-center border w-full h-full p-4 rounded-lg shadow uppercase text-2xl"
      style={{ height: "300px" }}

    >
      <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Jane Doe"
            aria-label="Full name"
            onChange={(event) =>
              handleWord(event.target.value.toLowerCase())
            }
            value={word}
          />
          <button
            onClick={() =>
              axios( baseUrl +"/add/" + word).then((response) =>
                handleLoaded(response)
              )
            }
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Add
          </button>
          <button
            className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
            type="button"
            onClick={() => handleWord("")}
          >
            Cancel
          </button>
        </div>
      </form>
    </FrontSide>
    <BackSide className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-4 relative">
      <p>GO BACK</p>
    </BackSide>
  </Flippy>
  );
}
export default NewItemCard;
