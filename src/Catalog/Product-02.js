import React from "react";
import { Component } from "react";

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
        "https://www.producola.com/content/images/2018/09/20052735_02_1200-2.jpg",
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
        {this.products.map(function (product) {
          return (
            <div className="col-md-4">
              <img
                alt={1}
                src={product.photo}
                class="img-thumnail"
                width="300"
              ></img>{" "}
              <br />
              {product.name} <p>{product.quantity}</p>
              <br />
              {product.description}
              <br />
              {product.price}
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Products;
