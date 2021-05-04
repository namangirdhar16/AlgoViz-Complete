import React from "react";
import Node from './Node.jsx';
import './pathfind.css';
import {dijsktra,getNodesInShortesPathOrder} from './dijkstra.js';
export default class PathFinder extends React.Component
{
   constructor(props)
   {
       super(props);
       this.state={
           grid:[],
        };
   }
   componentDidMount()
   {   
       const grid=getInitialGrid();
       this.setState({grid});

   }
   animateDijkstra(visitedNodesInOrder)
   {
    for(let i=0;i<visitedNodesInOrder.length;i++)
     {     
      
         setTimeout(()=>{
          const node=visitedNodesInOrder[i];
          const newGrid=this.state.grid.slice();
          const newNode={
              ...node,
              isVisited:true,
          };
          newGrid[node.row][node.col]=newNode;
          console.log(newGrid);
          this.setState({grid:newGrid});
             
         },i*200);
     }
 }
   visualiseDijkstra()
   {  
    const {grid}=this.state;
   // console.log(grid[10]);
    const startNode=grid[10][15];
    const endNode=grid[10][35];
    const visitedNodesInOrder=dijsktra(grid,startNode,endNode);
   // const nodesInShortestPathOrder=getNodesInShortesPathOrder(endNode);
    this.animateDijkstra(visitedNodesInOrder);
    console.log(grid);
   }

   render()
   {   const {grid}=this.state;
       console.log(grid);
      return(
          <>
                  <button onClick={() => this.visualiseDijkstra()}>
          Visualize Dijkstra's Algorithm
        </button>
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const {row, col, isEnd, isStart, isWall,isVisited} = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isEnd={isEnd}
                      isStart={isStart}
                      isVisited={isVisited}
                      row={row}></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
           
          </>
      );
   }
   

}
const getInitialGrid=()=>{
    const grid=[];
    for(let row=0;row<20;row++)
    {
        const currentRow=[];
        for(let col=0;col<50;col++)
        {
            currentRow.push(createNode(col,row));
        }
        grid.push(currentRow);
    }
    return grid;
}
const createNode=(col,row)=>{
    return {
        col,
        row,
        isStart :row===10 && col===15,
        isEnd: row===10 && col===35,
        distance:Infinity,
        isVisited:false,
        

    }
}