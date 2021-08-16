import React from "react";
import { Component } from "react";

class Products extends Component {
  // inside class no var, let , const.

  products = ["Television", "Laptop", "Bicycle", "Computer"];

  //fucntion return JSX

  render() {
    return (
      <div>
        <ol>
          {this.products.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ol>

        {this.products}
        {this.products.map(function (product) {
          return <div>{product} </div>;
        })}
      </div>
    );
  }
}

export default Products;
