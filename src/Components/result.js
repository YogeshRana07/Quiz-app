import React from "react";

const Result=({score,playagain})=>(
    

    <div className=" center-align ">

        <div className="flow-text card-panel teal lighten-2 white-text">You scored {score}/4 correct answers!</div><br/><br/>
        <button className="waves-effect waves-light btn center-align" onClick={playagain}>Play Again</button>
    </div>
);
export default Result;
