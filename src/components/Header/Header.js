import React from "react";
import "./Header.css";

const Header = ({ title, description }) => {
  return (
    <>
      <h1 className="title">{title}</h1>
      <h4 className="description">{description}</h4>
    </>
  );
};

export default Header;
