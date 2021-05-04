import React from "react";
import {NavLink} from "react-router-dom";
import './About.css';

//import "./cover.css";
//import "./bootstrap.min.css"
import MyCarousel from "./MyCarousel.js";
export default class Menu extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={};
  }
  render()
  {
   
return(
  <>
  
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header className="masthead mb-auto">
    <div className="inner">
      <h3 className="masthead-brand">AlgoViz</h3>
      <nav className="nav nav-masthead justify-content-center">
        <NavLink to="/" className="nav-link active" >Home</NavLink>
        <NavLink to="/algolist" className="nav-link" >Algorithms</NavLink>
        {/* <NavLink to="/about" className="nav-link">About </NavLink> */}
        <NavLink to ="/searching" className="nav-link" >Searching</NavLink>
        <NavLink to ="/sorting" className="nav-link" >Sorting</NavLink>
        
      </nav>
    </div>
  </header>
  
  <main role="main" className="inner cover">
    <h1 className="cover-heading font hello">Visualize Your Way to Algorithms.</h1>
    
    <p className="lead font2">AlgoViz is a simple and elegant web app that helps in visualising algorithms ,try it and learn in a unique way.</p>
    
    <NavLink to="/algolist" className="btn btn-lg btn-secondary headColor button2" >Click to Algortihms</NavLink>
    {/* <MyCarousel /> */}
    {/* <div class="button_cont" align="center"><NavLink to='/algolist' >Click to Algorithms</NavLink></div> */}
  </main>
  <footer className="mastfoot mt-auto">
   
      <p>Made with peace <a href="/">Algoviz</a>, by <a href="#">Naman & Karan</a>.</p>
    
  </footer>
  </div>
  
  </>

);

  }
};
// import React, { Component } from "react";
// import styles from "./styles/FlexDemo.module.css";
// export default className Menu extends Component {
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