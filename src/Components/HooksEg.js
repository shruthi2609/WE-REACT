import React, { useState } from "react";
const HookEg = () => {
  const [msg, setMsg] = useState("Hello");
  return (
    <div>
      <p> {msg} </p>
      <button
        onClick={() => {
          console.log("Before updating", msg);
          setMsg("See you later");
          console.log("After updating", msg);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default HookEg;
