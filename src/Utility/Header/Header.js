// functional component
import React from "react";

const Header = (props) => {
  //const title = "Intel - Online Bazzar";
  return (
    <div>
      <h1>{props.title}</h1>
      <hr></hr>
    </div>
  );
};

export default Header;
