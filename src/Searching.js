import React, { Component } from "react";
import LinearSearch from "./LinearSearch.js";
import BinarySearch from "./BinarySearch.js";
import "./Searching.css";
class Searching extends Component {
  render() {
    return (
      <div>
        <br />
        <h1 class="ui horizontal divider header" style={{textAlign:"center"}}>Linear Search</h1>
        <LinearSearch />
        <hr />
        <h1 class="ui horizontal divider header" style={{textAlign:"center"}}>Binary Search</h1>
        <BinarySearch />
      </div>
    );
  }
}
export default Searching;
