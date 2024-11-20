import React, { useState } from "react";

const Switch = () => {
  const [sw, setSw] = useState(false);

  return (
    <div>
      {sw ? <span>Dark</span> : <span>Light</span>}
      <br />
      <input type="text" key={sw?"dark":"Light"}/>
      <button onClick={() => setSw((s) => !s)}>Switch</button>
    </div>
  );
};

export default Switch;
