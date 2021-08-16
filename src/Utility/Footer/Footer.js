// functional component
import React from "react";

const Footer = (props) => {
  const currentDate = new Date().toDateString();
  return (
    <div>
      <hr></hr>
      <p>
        {props.children} {currentDate}
      </p>
    </div>
  );
};

export default Footer;
