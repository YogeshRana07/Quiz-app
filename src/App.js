import React, { Component } from 'react';

import './App.css';
import Display from './Components/display';
import Button from './Components/button.js';


class App extends Component {
  state={
    count:0,
    Color:''
  };

increment = () => {
  var c=this.state.count+1;
   var letters = "0123456789ABCDEF"; 
    var color = '#'; 
    for (var i = 0; i < 6; i++) 
       color += letters[(Math.floor(Math.random() * 16))]; 
  
 // document.write(color); 
 this.setState({

  count:c,
  Color:color
 });
}


decrement = () => {
  var d=this.state.count-1;
   var letters = "0123456789ABCDEF"; 
    var color = '#'; 
    for (var i = 0; i < 6; i++) 
       color += letters[(Math.floor(Math.random() * 16))]; 
  
 // document.write(color); 
 if(d>=0){
 this.setState({

  count:d,
  Color:color
 });}
  elseif(d==0)
  {
    this.setState({
      count:d,
      Color:""
    });
  }
}



update = () => {
  var f=0;
 this.setState({

  count:f,
  Color:""
 });
}




 render(){
  return (
    <div className="App">
    <div className="card-panel teal lighten-2 flow-text white-text center-align">COLOR CHANGER</div><br/><br/>
    <Display count={this.state.count} Color={this.state.Color} /><br/><br/>
   <Button increment={this.increment} decrement={this.decrement} update={this.update}/>
    </div>
      
    
  )
}
}

export default App;
