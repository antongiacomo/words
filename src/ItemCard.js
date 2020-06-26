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
    <div className={className}>
      <Flippy
        flipOnClick={false}
        ref={(r) => (flippy = r)}
        flipDirection="horizontal"
      >
        <FrontSide
          className="flex items-center justify-center border w-full h-full p-4 rounded-lg shadow uppercase text-2xl"
          style={{ height: "300px" }}
        >
          <div className="absolute left-0 right-0 top-0 px-4 text-right">
            <span
              className="text-sm cursor-pointer text-red-400"
              onClick={() =>
                axios
                  .delete(baseUrl + "/remove/" + item.word)
                  .then((response) => setLoaded(response))
              }
            >
              Delete
            </span>
          </div>
          <span className="cursor-pointer" onClick={() => flippy.toggle()}>
            {" "}
            {item.word}
          </span>
          <div className="absolute bottom-0 pb-2">
            <span
              className="text-teal-500 text-sm cursor-pointer"
              onClick={() => flippy.toggle()}
            >
              Reveal
            </span>
          </div>
        </FrontSide>
        <BackSide className="border border-teal-500 w-full h-full p-4 rounded-lg shadow">
          <p className="font-bold my-1 text-teal-300 ">
            {item.translations[0] && item.translations[0].title}
          </p>
          <div className="flex flex-wrap space-x-2">
            {item.translations[0] &&
              item.translations[0].translations.map((item, key) => {
                return (
                  <>
                    <p key={`1${item.to}${key}`}>{clear(item.to)}</p>
                    <p key={`2${item.to}${key}`}>●</p>
                  </>
                );
              })}
          </div>
          <p className="font-bold my-1 mt-2 text-teal-300">
            {item.translations[1] && item.translations[1].title}
          </p>
          {item.translations[1] &&
            item.translations[1].translations.map((item, key) => {
              return (
                <p key={`3${item.to}${key}`}>
                  {clear(item.from)} ⮕ {clear(item.to)}
                </p>
              );
            })}
          <div className="absolute left-0 bottom-0 pb-2 w-full flex justify-center">
            <span
              className="text-teal-500 text-sm cursor-pointer uppercase text-center"
              onClick={() => flippy.toggle()}
            >
              UnReveal
            </span>
          </div>
        </BackSide>
      </Flippy>
    </div>
  );
}
export default ItemCard;
