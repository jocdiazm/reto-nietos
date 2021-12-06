import React from "react";

const Header = ({ children }) => {
  const isDark = true;
  const border = isDark
    ? { border: "2px solid green" }
    : { border: "2px solid white" };
  return (
    <div>
      <h2 style={{ border }}>Soy el Header!</h2>
      {children}
    </div>
  );
};

export default Header;
