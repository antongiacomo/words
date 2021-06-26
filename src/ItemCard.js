import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import axios from "axios";

function clear(text) {
  return text.trim().replace(/⇒/gi, "");
}
function ItemCard({ item, setLoaded, className }) {
  //const [flippy, setFlippy] = useState();
  const baseUrl = window.$baseUrl;
  let flippy;
  return (
    <div className={className} >
      <Flippy
        flipOnClick={false}
        ref={(r) => (flippy = r)}
        flipDirection="horizontal"
        style={{willChange: "transform"}}
      >
        <FrontSide
          className="bg-teal-500 flex items-center justify-center content-around w-full h-full p-4 rounded-lg shadow  capitalize text-3xl
bg-gradient-to-tr from-teal-500 to-teal-800
          "
          style={{ height: "300px", backgroundImage: "linear-gradient(to top right, var(--tw-gradient-stops))"}}
        >
          <div className="absolute right-0 top-0 px-4 py-2 ">
            <span
              className="text-sm cursor-pointer text-gray-200 upper"
              onClick={() => {
                if (
                  window.confirm("Are you sure you wish to delete this item?")
                )
                  axios
                    .delete(baseUrl + "delete?word=" + item.word)
                    .then((response) => setLoaded(response));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-trash stroke-current"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
            </span>
          </div>
          <span
            className="cursor-pointer text-gray-200"
            onClick={() => flippy.toggle()}
          >
            {" "}
            {item.word}
          </span>
          {/* <div>
            <span
              className="text-white cursor-pointer"
              onClick={() => flippy.toggle()}
            >

            </span>
          </div> */}
        </FrontSide>
        <BackSide
          className="bg-teal-500  border border-teal-500 w-full h-full p-4 rounded-lg shadow"
          style={{ backgroundColor: "#319795" }}
        >
          <div className="h-full w-full p-2 pb-4">
            <div className="absolute left-0 top-0 px-4 py-2 ">
              <span className="text-sm cursor-pointer text-gray-400 upper">
                <svg
                  onClick={() => flippy.toggle()}
                  xmlns="http://www.w3.org/2000/svg"
                  className=" cursor-pointer icon icon-tabler icon-tabler-arrow-back-up"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
                </svg>
              </span>
            </div>
            <div className="h-full mt-2 overflow-y-scroll">
              {item.translations.slice(0, 2).map((item, key) => {
                return (
                  <>
                    <p className="font-bold my-1 mt-2 text-teal-300">
                      {item.translations[key] && item.title}
                    </p>
                    {item.translations[key] &&
                      item.translations.map((item) => {
                        return (
                          <>
                            <p key={`3${item.to}${key}`}>
                              {clear(item.from)} ⮕ {clear(item.to)}
                            </p>
                          </>
                        );
                      })}
                  </>
                );
              })}
            </div>
          </div>
        </BackSide>
      </Flippy>
    </div>
  );
}
export default ItemCard;
