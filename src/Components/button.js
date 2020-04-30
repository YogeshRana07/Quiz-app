import React ,{Component} from 'react';
import './button.css';
class Button extends Component{
    render(){
        return(
            <div className="container center-align">
            <button id="btn1" className=" waves-effect waves-light btn" onClick={this.props.increment}><i className="fa fa-plus fa-2x" aria-hidden="true"></i></button>
            <button id="btn2"  className="waves-effect waves-light btn" onClick={this.props.update}><i className="fa fa-refresh fa-2x" aria-hidden="true"></i></button>
            <button id="btn3"  className="waves-effect waves-light btn" onClick={this.props.decrement}><i className="fa fa-minus fa-2x" aria-hidden="true"></i></button>
        
        <div className="footer flow-text ">
        <span>MADE BY <i class="fa fa-heart" aria-hidden="true"></i> YOGESH RANA</span>

        </div>
        </div>
        );
    }
}
export default Button;