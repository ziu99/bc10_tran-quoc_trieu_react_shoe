import React, { Component } from "react";
import Item from "./Item";

export default class extends Component {
  renderList = () => {
    return this.props.shoeArr.map((item) => {
      return (
        <Item
          handleClickView={this.props.handleViewDetail}
          key={item.id}
          data={item}
        />
      );
    });
  };
  render() {
    return <div className="row">{this.renderList()}</div>;
  }
}
