import React, { useState } from "react";

const UseState5 = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <h1>Your Name:{name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your Name"
      />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
};

export default UseState5;
