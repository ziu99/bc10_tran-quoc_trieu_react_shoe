import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { image, name, price } = this.props.data;
    return (
      <div className="col-3">
        <img
          style={{
            objectFit: "cover",
          }}
          className="w-100"
          src={image}
          alt=""
        />
        <h3
          style={{
            color: "blue",
          }}
        >
          {name}
        </h3>

        <button className="btn btn-success">ADD</button>
        <button
          onClick={() => {
            console.log("sun");
            this.props.handleClickView(this.props.data);
          }}
          className="btn btn-warning"
        >
          VIEW
        </button>
      </div>
    );
  }
}
