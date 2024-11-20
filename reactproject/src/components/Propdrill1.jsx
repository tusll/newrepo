import React, { createContext } from "react";
// import PropDrill4 from "./PropDrill4";
import PropDrill5 from "./PropDrill5";

export const Data = createContext();
export const Data1=createContext();
const Propdrill1 = () => {
  const name = "Huxn";
  const age = 19;
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          {/* <PropDrill4 /> */}
          <PropDrill5/>
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
};

export default Propdrill1;
