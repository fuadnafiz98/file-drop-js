import React, { useEffect, useRef } from "react";

export default function () {
  let buttonRef = useRef();
  useEffect(() => {
    console.log(buttonRef);
    window.addEventListener("click", () => console.log("hello"));
  }, []);
  return (
    <div>
      <button ref={elem => (buttonRef = elem)}>Click</button>
    </div>
  );
}
