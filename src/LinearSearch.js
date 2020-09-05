import React, { Component } from "react";
import SearchingTiles from "./SearchingTiles";
import "./LinearSearch.css";
import { RandomInt } from "./RandomInt";
import "./Searching.css";

export default class LinearSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      message: "",
      disabled: false,
      found: false,

      findex: 0,
      target: null,
      start: false,
      completed: false
    };
  }
  // LinearSearchAnimations = (array, target) => {
  //   const animations = [];
    
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] === target) {
  //       animations.push([array[i], i, true]);
  //       console.log(i);
  //      break;
  //     }
  //     else{
  //       animations.push([array[i],i,false]);
  //     }
  //   }
  //   console.log( animations);
  //   return animations;
  // };
  linearSearchAnimations = (array, target) => {
    let animations = [];
    for (let i = 0; i < array.length; i++) {
      const [ele,index,found]=array[i];

      const tar = parseInt(target);
      if (ele === tar) {
        animations.push([i, ele, true]);
      //  console.log(i);
        break;
      } else {
        animations.push([i, ele, false]);
      }
    }
    console.log(animations);
    return animations;
  };
 
  Arrayreset = () => {
    const array = [];
    const message = "";
    const disabled = false;
    const found = true;
    const target = null;
    const start = false;
    const completed = false;
    document.getElementById("target").value = "";
    //const prevArray=document.getElementsByClassName("linear-array-bar");
    // for(var i=0;i<prevArray.length;i++)
    // {
    //   prevArray[i]classList.remove("growFind");
    //   prevArray[i]classList.remove("highlight");
    //  //prevArray[i]classList.style.backgroundColor="purple";
    // }
    const previousArray = document.getElementsByClassName("linear-array-bar");
    for (let index = 0; index < previousArray.length; index++) {
      previousArray[index].style.backgroundColor = "purple";
      previousArray[index].classList.remove("growFind");
      previousArray[index].classList.remove("highlight");
    }
    for (let i = 0; i < 20; i++) {
      array.push([RandomInt(3, 1000), i]);
    }
   // console.log(array);
    this.setState({
      array: array,
      message: message,
      disabled: disabled,
      found: found,
      target: target,
      start: start,
      completed: completed
    });
  };
  componentDidMount() {
    this.Arrayreset();
  }

  //main function linear search
  LinearSearch() {
    var msg = "";
    const target = document.getElementById("target").value;
    if (target === "") {
      return undefined;
    }
    const animations = this.linearSearchAnimations(this.state.array, target);
    console.log(animations);
    //console.log(newa);
    let  count=0;
    for(var i=0;i<animations.length;i++)
    {  count++;
      const [index,value,found]=animations[i];
      const bars=document.getElementsByClassName("linear-array-bar");
      const bar=bars[index];
      const barStyle=bar.style;
     if(found)
     {  
     msg=`${value} found at index ${index}`;
     setTimeout(()=>{
     this.setState(
       { 
         found:true,
         disabled:true,
        findex:index,
        completed:true,
       target:value,
      start:true,
      message:msg,

       }
     );
     barStyle.backgroundColor="green";
     bar.classList.add("growFind");
     bar.classList.add("highlight");
     },i*200);
     }
     else
     {  let completed=false;
       if(i===19)
       completed=true;
      
     msg=`element not found`;
     setTimeout(()=>{
      this.setState(
        { 
          found:false,
          disabled:false,
         message:msg,
         completed:completed,
        //target:value,
       start:true
 
        }
      );
      barStyle.backgroundColor="red";
      bar.classList.add("growFind");
      //bar.classList.add("highlight");
      },i*200);
     }
    
    }
    console.log(count);
    
  
  setTimeout(()=>{
    this.setState({message:msg});
  },count*1000);
}
  // array: [],
  //     message: "",
  //     disabled: false,
  //     found: false,

  //     findex: 0,
  //     target: null,
  //     start: false,
  //     completed: false
  render() {
    const {array,message,disabled,found,findex,target,start,completed}=this.state;
    //const { array } = this.state;
    console.log(completed);
    return (
      <div>
        <input type="text" placeholder="enter index number" id="target" />
        <button
          onClick={() => {
            this.Arrayreset();
          }}
        >
          Reset Array
        </button>
        <button
        disabled={found?false:true}
          onClick={() => {
            this.LinearSearch();
          }}
        >
          temp
        </button>
        { completed?<h1>{message}</h1>:null}

        <div className="container">
          {array.map(function (item) {
            const temp = item;
            // console.log(item);

            const [one, two] = temp;
            return (
              <SearchingTiles type={LinearSearch} index={two} value={one} />
            );
          })}
          {/* { array.map((index,value)=>
           (
            <SearchingTiles index={index}
           value={value}
            />
           ))
           } */}
        </div>
      </div>
    );
  }
}
