import React from "react";
import icon from "./logo512.png";
function Search({ title, handleTitle, filter, handleFilter }) {
  return (
    <>
      <div className="flex flex-no-wrap h-10 px-8 z-50 relative">
        <img src={icon} className="h-full inline-block mr-2" alt="Logo" />
        <input
          placeholder="Filter..."
          className="w-full   h-full py-2 px-4 shadow bg-gray-900  rounded-lg"
          onChange={(event) =>
            handleTitle(event.target.value.toLowerCase().split("&"))
          }
          value={title}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleFilter([
                ...new Set([...filter, event.target.value.toLowerCase()]),
              ]);
              handleTitle([""]);
            }
          }}
        />
        {/* <div className="w-32 flex justify-center items-center">casa | casa</div> */}
      </div>
      <div className="flex px-8 flex-wrap space-x-2">
        {filter.map((f) => {
          return (
            <span
              key={f}
              className="rounded-full py-2 px-4 my-2 bg-gray-300 hover:shadow-md hover:translate-x-1"
            >
              {f}{" "}
              <span
                className="ml-1 border cursor-pointer"
                data-value={f}
                onClick={(event) =>
                  handleFilter(
                    filter.filter((e) => e !== event.target.dataset.value)
                  )
                }
              >
                ✘
              </span>
            </span>
          );
        })}
      </div>
    </>
  );
}

export default Search;
