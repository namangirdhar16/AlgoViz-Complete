import React from "react";
import {NavLink} from "react-router-dom";
import "./bootstrap.min.css";
import "./cover.css";

export default class Menu extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={};
  }
  render()
  {
    return (
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header className="masthead mb-auto">
    <div className="inner container ">
      <h3 className="masthead-brand">AlgoViz</h3>
      <nav className="nav nav-masthead justify-content-center">
        <a className="nav-link active" href="#">Home</a>
        {/* <a className="nav-link" href="#">Features</a> */}
        <NavLink className="nav-link" to="/searching">Searching </NavLink>
        <a className="nav-link" href="/algolist"> Algortihms</a>
      </nav>
    </div>
  </header>

  <main role="main" className="inner cover">
    <h1 className="cover-heading">Vizualize your way to algorithms.</h1>
    <p className="lead">AlgoViz is a  simple and elegant web app that helps in visualising algorithms
    ,try it and learn in a unique way.
    </p>
    <p className="lead">
      {/* <a href="#" className="btn btn-lg btn-secondary headColor"> */}
                  <NavLink to ="/algolist" className="btn btn-lg btn-secondary headColor">Click to Algortihms</NavLink>
                  
                  {/* </a> */}
    </p>
  </main>

  <footer className="mastfoot mt-auto">
    <div className="inner">
      <p>Made with peace ' ^ - ^ ' <a href="https://twitter.com/mdo">&copy; algoviz</a>.</p>
    </div>
  </footer>
</div>

    );
  }
};
// import React, { Component } from "react";
// import styles from "./styles/FlexDemo.module.css";
// export default class Menu extends Component {
//     render() {
//         return (
//             <div className={styles.container}>
//                 <div className={styles.subContainer}>
//                     <img
//                         src="https://source.unsplash.com/random"
//                         width="40%"></img>
//                     <div className={styles.subText}>
//                         <h1>Flex Box Demo</h1>
//                         <p>
//                             Aliquip ea culpa dolore ut culpa culpa incididunt
//                             minim culpa qui elit veniam ut. Excepteur irure
//                             voluptate amet nisi excepteur non dolore ipsum id
//                             dolor proident mollit nostrud nulla. Duis proident
//                             voluptate quis sit excepteur ut qui mollit. Anim
//                             ullamco nostrud proident amet nulla ut est deserunt
//                             cillum. Ea ex nostrud occaecat consectetur et.
//                         </p>
//                     </div>
//                 </div>
//             </div>
// );
// }}