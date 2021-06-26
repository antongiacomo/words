import React, { useState, useRef } from "react";
import Portal from "@reach/portal";
import { useRect } from "@reach/rect";

export default function Autocomplete(props) {
  const [cursor, setCursor] = useState(0);
  const [hasFocus, setHasFocus] = useState(false);
  const [hasDone, setHasDone] = useState(false);
  const searchRef = useRef();
  const suggestionRef = useRef();

  useRect(searchRef, {
    onChange(rect){

      console.log(hasFocus)
      if (suggestionRef.current && rect) {
        suggestionRef.current.style.left = rect.left + "px";
        suggestionRef.current.style.top = rect.top + rect.height + "px";
        suggestionRef.current.style.width = rect.width + "px";
      }
    }

  });

  const handleKeyPress = (e) => {
    e.preventDefault();
    e.persist();

    setHasDone(false);

    if (e.key === "ArrowUp" && cursor - 1 >= 0) {
      setCursor(cursor - 1);
    }

    if (e.key === "ArrowDown" && cursor + 1 < props.suggestions.length) {
      setCursor(cursor + 1);
    }

    if (e.key === "Enter") {
      props.onSelect(props.suggestions[cursor]);
      setHasFocus(false);
      setHasDone(true);
    }
  };

  return (
    <div>
      <input
        type="text"
        autoComplete="off"
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        ref={searchRef}
        className={props.className}
        onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
        onKeyUp={handleKeyPress}
        onChange={(e) => {
          props.onChange(e);
        }}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      <Portal>
        <div ref={suggestionRef} className="shadow absolute text-left z-10 text-black">
          { !hasDone && props.suggestions.length > 0 && (
            <div className="shadow border border-white bg-white text-gray-900 absolute text-left z-10 w-full h-64 overflow-auto rounded-lg">
              {!hasDone &&
                props.suggestions.length > 0 &&
                props.suggestions.map((suggestion, i) => {
                  return (
                    <div
                      key={`${suggestion}${i}`}
                      onClick={() => {
                        props.onSelect(suggestion);
                        setHasFocus(false);
                        setHasDone(true);
                      }}
                      className={`${
                        cursor === i ? "bg-teal-100" : ""
                      } p-2 cursor-pointer`}
                    >
                      {suggestion}
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </Portal>
    </div>
  );
}
