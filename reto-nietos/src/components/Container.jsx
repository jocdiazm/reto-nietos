import React from "react";

const Container = ({ children }) => {
  return (
    <div>
      <h1>Soy el Container!</h1>
      {children}
    </div>
  );
};

export default Container;
