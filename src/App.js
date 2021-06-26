import React, { useState, useEffect } from "react";
import axios from "axios";
import "./tailwind.generated.css";
import NewItemCard from "./NewItemCard";
import Search from "./Seach";
import ItemCard from "./ItemCard";

//
function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([""]);
  const [filter, setFilter] = useState([]);
  const [word, setWord] = useState([]);
  const [loaded, setLoaded] = useState("");
  const baseUrl = window.$baseUrl;
  //const baseUrl = "http://localhost:3000"
  useEffect(() => {
    var config = {
      headers: { "Access-Control-Allow-Origin": "*" },
    };

    const fetchData = async () => {
      const result = await axios(baseUrl + "/list", config);

      setData(result.data.reverse());
      setWord("");
    };

    fetchData();
  }, [loaded, baseUrl]);

  function clear(item) {
    var set = [...title, ...filter];

    var result = set.map((element) => {
      return item.word.toLowerCase().includes(element);
    });

    return result.some((item) => item);
  }

  return (
    <div className="py-6">
      <Search
        title={title}
        filter={filter}
        handleFilter={setFilter}
        handleTitle={setTitle}
      ></Search>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:gird-cols-3 md:grid-cols-2  grid-cols-1   p-4">
        <div key="base" className="w-full p-4 relative" >
          <NewItemCard
            word={word}
            handleLoaded={setLoaded}
            handleWord={setWord}
          ></NewItemCard>
        </div>
        {data
          .filter((item) => clear(item))
          .map((item, index) => {
            return (
              <ItemCard
                key={`card${index}`}
                className=" w-full p-4 relative"
                item={item}

                setLoaded={setLoaded}
              ></ItemCard>
            );
          })}
      </div>
    </div>
  );
}

export default App;
