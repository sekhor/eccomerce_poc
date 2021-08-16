import React from "react";
import { Component } from "react";
import Gallery from "./Gallery";

class Products extends Component {
  // inside class no var, let , const.

  products = [
    {
      name: "Television",
      quantity: 60,
      description: "To watch Movie",
      price: 1285.55,
      photo:
        "https://www.producola.com/content/images/2018/09/20052735_02_1200-2.jpg",
    },
    {
      name: "Laptop",
      quantity: 20,
      description: "To watch Movie",
      price: 1285.55,
      photo:
        "https://i.guim.co.uk/img/media/2c19c3b2fcbb78358eb734c8cba2bfb02388df0a/0_92_1750_1050/master/1750.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=253fee8b29eb5274ee433b788e34ede3",
    },
    {
      name: "Bicycle",
      quantity: 30,
      description: "To watch Movie",
      price: 1285.55,
      photo:
        "https://www.producola.com/content/images/2018/09/20052735_02_1200-2.jpg",
    },
    {
      name: "Computer",
      quantity: 40,
      description: "To watch Movie",
      price: 1285.55,
      photo:
        "https://www.producola.com/content/images/2018/09/20052735_02_1200-2.jpg",
    },
    {
      name: "Handphone",
      quantity: 40,
      description: "To call",
      price: 85.55,
      photo:
        "https://www.producola.com/content/images/2018/09/20052735_02_1200-2.jpg",
    },
    {
      name: "Radio",
      quantity: 50,
      description: "To listen",
      price: 128.55,
      photo:
        "https://www.producola.com/content/images/2018/09/20052735_02_1200-2.jpg",
    },
  ];

  //fucntion return JSX

  render() {
    return (
      <div className="row">
        {this.products.map(function (product, index) {
          return <Gallery key={index} product={product}></Gallery>;
        })}
      </div>
    );
  }
}

export default Products;
