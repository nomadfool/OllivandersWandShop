import React, { Component } from "react";

class Wand extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-6 col-12 m-2">
        <div className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={this.props.wand.imageUrl}
              alt={this.props.wand.core}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{this.props.wand.core}</span>
            </h5>
            <small className="card-text">wood: {this.props.wand.wood}</small>
            <br />
            <small className="card-text">
              length: {this.props.wand.length}
            </small>
          </div>
        </div>
      </div>
    );
  }
}
export default Wand;
