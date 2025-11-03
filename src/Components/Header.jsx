import React from "react";

const Header = () => {
  const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    // <h1 style={{ color: "red", fontSize: "48px" }}>First react Pizza Co.</h1>
    <header className="header">
      <h1 style={style}>First react Pizza Co.</h1>
    </header>
  );
};

export default Header;
