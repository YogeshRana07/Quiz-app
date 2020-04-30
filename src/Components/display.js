import React from 'react';
import './display.css';
const Display=({count,Color})=>{
    return (
        <div  className="dis " style={{backgroundColor:Color}}>

            <span className="t1 ">{count}</span>
        </div>
    );
}
export default Display;
