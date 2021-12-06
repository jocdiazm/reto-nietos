import React from "react";
// import { useState } from "react";

const Switch = () => {
  // const [theme, setTheme] = useState(false);
  const handleSwitch = ({ target }) => {
    const isChecked = target.checked;
    const body = document.querySelector("body");

    if (!isChecked) {
      body.classList.add("light-theme");
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
    }
  };
  return (
    <div>
      <label class="switch">
        <input onChange={handleSwitch} type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
