import React from "react";
import mergeSort from "./mergeSort.js";
import bubbleSort from "./bubbleSort.js";
import "./Sorting.css";
import "./slider.css";
import { RandomInt } from "./RandomInt";
import selectionSort from "./selectionSort.js";

import insertionSort from "./insertionSort";
import { QuickSortAlgorithm } from "./quickSort.js";

export default class Sorting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      disable: false,
      value: '',

    };
  }
  componentDidMount() {
    this.resetArray();
  }
  resetArray() {  //this.state.disable=false;
    const array = [];
    for (let i = 0; i < 110; i++) {
      array.push(RandomInt(7, 500));
    }
    let arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < arrayBars.length; i++)
      arrayBars[i].style.backgroundColor = "#0033FF";
    const disable = false;

    this.setState({ array: array, disable: disable });
  }


  MergeSort() {
    const SPEED = this.state.value;
    const animations = mergeSort(this.state.array);
    // this.setState({disable:true})
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "#FF00FF" : "#0033FF";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 100 / SPEED);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 100 / SPEED);
      }
    }

    setTimeout(() => { this.completed() }, animations.length * 100 / SPEED);


  }
  BubbleSort() {
    const SPEED = this.state.value;
    console.log(this.state.array);
    const animations = bubbleSort(this.state.array);
    console.log(animations);
    console.log(this.state.array);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animations.length; i++) {
      const [barOneIndex, barTwoIndex] = animations[i];
      const styleOne = arrayBars[barOneIndex].style;
      const styleTwo = arrayBars[barTwoIndex].style;
      if (i % 2 == 0) {
        setTimeout(() => {
          styleOne.backgroundColor = "#FF00FF";

          styleTwo.backgroundColor = "#FF00FF";




        }, i * (100 / SPEED))


        setTimeout(() => {
          styleOne.backgroundColor = "#0033FF";
          styleTwo.backgroundColor = "#0033FF";

        }, (i + 1) * (100 / SPEED));

      }
      else {

        setTimeout(() => {
          // styleOne.backgroundColor="#0033FF";
          // styleTwo.backgroundColor="#0033FF";
          const temp = styleOne.height;
          styleOne.height = styleTwo.height;
          styleTwo.height = temp;
        }, ((i + 2) * (100 / SPEED)));
        // styleOne.backgroundColor="#0033FF";
        //   styleTwo.backgroundColor="#0033FF";
      }
    }
    setTimeout(() => { this.completed() }, animations.length * 100 / SPEED);
  }



  // function for selection sort
  SelectionSort() {
    const SPEED = this.state.value;
    console.log(this.state.array);
    const animations = selectionSort(this.state.array);
    console.log(animations);
    console.log(this.state.array);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animations.length; i++) {
      const [firstIndex, minIndex] = animations[i];
      const firstBarStyle = arrayBars[firstIndex].style;
      const minBarStyle = arrayBars[minIndex].style;
      if (i % 2 == 0) {
        setTimeout(() => {
          firstBarStyle.backgroundColor = "#FF00FF";
        }, i * 100 / SPEED);
        setTimeout(() => {
          minBarStyle.backgroundColor = "orange";
        }, (i + 1) * 100 / SPEED);
      }
      else {
        setTimeout(() => {
          firstBarStyle.backgroundColor = "#0033FF";
          minBarStyle.backgroundColor = "#0033FF";
          const temp = firstBarStyle.height;
          firstBarStyle.height = minBarStyle.height;
          minBarStyle.height = temp;
        }, (i + 1) * 100 / SPEED);
      }

    }

    setTimeout(() => { this.completed() }, animations.length * 100 / SPEED);
  }


  completed() {
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < 110; i++) {
      setTimeout(() => {
        // document.getElementsByClassName("array-bar").style.backgroundColor="#33FF00";
        arrayBars[i].style.backgroundColor = "#33FF00";
      }, i * 10);
    }
    for (let i = 0; i < 110; i++) {
      arrayBars[i].style.backgroundColor = "#FF00FF";
    }
  }

  InsertionSort() {
    const SPEED = this.state.value;
    console.log(this.state.array);
    const animations = insertionSort(this.state.array);
    console.log(animations);
    console.log(this.state.array);
    const arrayBars = document.getElementsByClassName("array-bar");
    let count = 0;

    for (let i = 0; i < animations.length; i++) {
      if (animations[i].length === 1 && animations[i][0].length === 1) {
        setTimeout(() => {
          arrayBars[animations[i][0][0]].style.backgroundColor = "#00FFFF";
        }, count * 100 / SPEED);

        setTimeout(() => {
          arrayBars[animations[i][0][0]].style.backgroundColor = "#0033FF";
        }, (count + 1) * 100 / SPEED);
        count++;
        continue;
      }

      else {
        {
          for (let j = 0; j < animations[i].length; j++) {
            if (j === -1) {

            }
            else {
              setTimeout(() => {
                arrayBars[animations[i][j][0]].style.backgroundColor = "#00FFFF";
                if (j === 0 || j === animations[i].length - 1)
                  arrayBars[animations[i][j][0]].style.backgroundColor = "#FF00FF";

                const tempHeight = arrayBars[animations[i][j][1]].style.height;
                arrayBars[animations[i][j][1]].style.height = arrayBars[animations[i][j][0]].style.height;
                arrayBars[animations[i][j][0]].style.height = tempHeight;
              }, (count + 1) * 100 / SPEED);
              count++;
            }
          }

          for (let j = 0; j < animations[i].length; j++) {
            setTimeout(() => {
              arrayBars[animations[i][j][0]].style.backgroundColor = "#0033FF";

            }, (count + 1) * 100 / SPEED);
            count++;

          }
          count++;

        }
      }
    }
    setTimeout(() => { this.completed(); }, count * 100 / SPEED);
  }
  QuickSort() {
    const ANIMATION_SPEED_MS = 10 / this.state.value;
    console.log(ANIMATION_SPEED_MS);



    let count = 0;
    // eslint-disable-next-line
    const [animations, sortArray] = QuickSortAlgorithm(this.state.array);
    for (let i = 0; i < animations.length - 1; i++) {
      const isColorChange = animations[i][0] !== 'swapHeight';
      count++;
      const arrayBars = document.getElementsByClassName('array-bar');
      if (isColorChange === true) {
        const color =
          animations[i][0] === 'comparison1' ? "#FF00FF" : "#0033FF";
        // console.log(color);
        // eslint-disable-next-line
        const [temp, barOneIndex, barTwoIndex] = animations[i];
        if (barOneIndex === -1) {
          continue;
        }
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        // eslint-disable-next-line
        const [temp, barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    const s = document.getElementsByClassName('array-bar');
    setTimeout(() => {
      for (let i = 0; i < s.length; i++) {
        //s[i].style.backgroundColor = "";
        console.log(s[i].style.backgroundColor);
      }
      //this.setState({ start: false });
      // this.generateEnable();
    }, (count + 2) * ANIMATION_SPEED_MS);
    setTimeout(() => { this.completed() }, animations.length * ANIMATION_SPEED_MS);
  }

  test(sortedArray, jsSortedArray) {
    if (sortedArray.length != jsSortedArray.length) {
      console.log("false");
      return false;
    }
    for (let i = 0; i < sortedArray.length; i++)
      if (sortedArray[i] != jsSortedArray[i]) {
        console.log("false");
        return false;
      }
    console.log("true");
    return true;
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
    console.log(this.state.value);
  };
  render() {
    const { array } = this.state;
    //console.log(array);
    return (
      <div>
        <div className="array-container">
          {/* <Slider
              value={this.state.value}
              labels={{ 1: 'Fast', 50: 'Medium', 100: 'Slow' }}
              min={1}
              max={100}
              //disabled={false}
              orientation='horizontal'
              onChange={this.handleChange}
            /> */}
          <h1 style={{ textAlign: 'center' }}>Sorting Algorithms</h1>

          {array.map((value, index) => {
            return (<div className="array-bar" style={{ height: `${value}px` }} key={index}>


            </div>);
          })}


          <div>
            <label for="typeinp">Speed:</label>
            <input id="typeinp" type="range" min="0" max="10" value={this.state.value} step="0.05" onChange={this.handleChange} />
            <button className="btn btn-outline-light " onClick={() => { this.resetArray() }} style={{ display: 'block' }}>Reset Array</button>
            <button className="btn btn-outline-light " disabled={this.state.disable} onClick={() => { this.MergeSort() }} >Merge Sort</button>
            <button className="btn btn-outline-light " onClick={() => { this.BubbleSort() }}>Bubble Sort</button>

            <button className="btn btn-outline-light " onClick={() => { this.SelectionSort() }}>Selection Sort</button>
            <button className="btn btn-outline-light " onClick={() => { this.InsertionSort() }}>Insertion Sort</button>
            <button className="btn btn-outline-light " onClick={() => { this.QuickSort() }}>Quick Sort</button>
          </div>

        </div>
      </div>);











  }


}
