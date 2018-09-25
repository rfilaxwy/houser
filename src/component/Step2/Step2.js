import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Step2 extends Component{
    constructor(){
        super()
        this.state={
            image:''     
        }
    }
    handleImage(val){
        console.log(val)
        this.setState({image:val})
    }
  
   
    render(){
        return(
            <div>
                <div>Wizard</div>
                <input onChange={(e)=>this.handleImage(e.target.value)} placeholder='name'></input>               
            </div>
        )
    }
}
export default Step2;