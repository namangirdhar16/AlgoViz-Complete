import React from "react";
import './Node.css';
export default function Node(props)
{   const {isStart,isEnd,isVisited}=props;
    //const extraClassName = isStart ? 'isStart' : isEnd ? 'isEnd' : isVisited ? 'node-start': '';
    let extraClassName="";
    if(isStart)
    extraClassName='isStart';
    if(isEnd)
    extraClassName='isEnd';
    if(isVisited)
    extraClassName='node-visited';


    return (<div className={`node ${extraClassName}`}></div>);
} 