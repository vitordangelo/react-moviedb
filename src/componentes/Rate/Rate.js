import React, { useState } from "react";

const Rate = ({ callback }) => {
  const [value, setValue] = useState(5);

  return (
    <>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      {value}

      <p>
        <button onClick={() => callback(value)}>Rate</button>
      </p>
    </>
  );
};

export default Rate;
