import React, { Component } from 'react';

import './App.css';
import questions_set from './Components/questions_set';
import QuestionBox from './Components/Boxes';
import Result from './Components/result'
    
class App extends Component {
  state={
    questionBank: [],
    score:0,
    response:0
  };


  playagain=()=>{
    this.getQuestions();
    this.setState({
      socre:0,
      response:0
    })
  }

  computeanswer=(answer,correctanswer)=>{
    if(answer===correctanswer)
    {
       this.setState({
         socre:  Number(this.state.score) + 1
       });

    }
    this.setState({
      response:this.state.response <4 ?this.state.response + 1 : 4
    })

  }

  getQuestions=()=>{
      questions_set().then(question=>{
        this.setState({questionBank:question});
      });
  };
  componentDidMount(){
    this.getQuestions();
  }
 render(){
  return (
    <div className="App">
      <div className="flow-text card-panel teal lighten-2 white-text center-align z-depth-3">HOW MUCH U KNOW ABOUT ME</div>
      {
        this.state.questionBank.length>0 && this.state.response< 4 && this.state.questionBank.map(
          ({
        question,answer,correct,questionid})=>
        (<QuestionBox question={question} options={answer} key={questionid} selected={answer=> this.computeanswer(answer,correct)} />

         ) )}

         {this.state.response===4 ? (<Result score={this.state.score} playagain={this.playagain} /> ) : null }
    </div>

    
  );
}
}

export default App;