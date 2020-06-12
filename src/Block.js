import React from "react";
import moment from "moment";

function Block({ item }) {
  function chiusura(chiusura) {
    var weigth = "500 border-b-2 pb-0";
    chiusura = moment().diff(chiusura, "days");

    if (chiusura >= -2 && chiusura <= 0) return "border-yellow-" + weigth;
    if (chiusura > 0) return "border-red-" + weigth;
    return "border-green-" + weigth;
  }

  return (
    <div className="flex flex-wrap ">
      {item.appelli.map((appello) => (
        <div className="w-full bg-gray-200 mr-1 my-1 p-2 rounded-lg ">
          <div
            className={
              moment().diff(appello.chiusura, "days") > 0
                ? "opacity-50"
                : "opacity-100"
            }
          >
            <p>
              <span className="font-medium">Chiusura:</span>
              <span className={chiusura(appello.chiusura) + " p-1"}>
                {appello.chiusuraStr}({moment().diff(appello.chiusura, "days")}{" "}
                giorni)
              </span>
            </p>
            <span className="font-medium">Appello: </span>
            {moment(appello.data).format("DD/M")}

            <span className="text-sm">
              ({moment().diff(appello.data, "days")} giorni)
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Block;
