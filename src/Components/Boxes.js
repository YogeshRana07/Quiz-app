import React, {useState, Children} from "react";
const QuestionBox =({question,options, selected})=>{
    const [answer,setanswer]=useState(options);
    return(
        <div className="containor collection left-align">
            <div className="items flow-text card-panel blue-lighten-4 red-text" >{question}</div>
            {answer.map((text,index)=>(
            <button key={index} className="waves-effect waves-light btn" onClick={()=>{
                setanswer([text]);
                selected(text);
            }}>
                {text}
            </button>
            
            ))}

        </div>
    );
};

export default QuestionBox;