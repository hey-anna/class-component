import React, { Component } from "react";

export default class BoxClass extends Component {
  render() {
    // return <div className="box"> Box{this.props.num}</div>;
    return (
      <div className={this.props.className}>
        <h1>{this.props.title}</h1>
        <img
          className="item-img"
          src={this.props.item && this.props.item.img}
          alt={this.props.item ? this.props.item.name : ""}
        />
        <h2>{this.props.result}</h2>
      </div>
    );
  }
}
