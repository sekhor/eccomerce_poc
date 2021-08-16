import React from "react";
import { Component } from "react";

class Gallery extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div class="card">
          <img
            class="card-img-top"
            src={this.props.product.photo}
            alt={this.props.product.name}
            className="img-thumnail"
            width="300"
            height="200"
          />
          <div class="card-body">
            <h4 class="card-title">{this.props.product.name}</h4>
            <p class="card-text">{this.props.product.description}</p>
            <h6 class="card-title">Quantiy : {this.props.product.quantity}</h6>
            <h6 class="card-title">Price {this.props.product.price}</h6>
            <a href="#" class="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
