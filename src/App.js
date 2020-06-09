import React, { useState, useEffect } from "react";
import axios from "axios";
import "./tailwind.generated.css";
//
function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

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

  return (
    <div className="">
      <div className="w-full h-10 px-4 my-6">
        <input
          className="w-full h-full border py-2 px-4"
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="flex flex-wrap p-6">
        {data.map((item) => {
          if (item.descrIns.toLowerCase().includes(title))
            return (
              <div className=" w-1/4" key={item.codW4}>
                <div className="border w-full h-full p-6">
                  {item.descrIns}
                  <div className="flex flex-wrap ">
                    {item.appelli.map((appello) => (
                      <p className="bg-purple-200 m-1 px-1 rounded-lg">
                        {appello.dataStr}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
           else
            return <div></div>;

        })}
      </div>
    </div>
  );
}

export default App;
