import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Step3 extends Component{
    constructor(){
        super()
        this.state={
            monthlyMortgage:'',
            desireAmount:''     
        }
    }
    handleMortgage(val){
        
        this.setState({monthlyMortgage:val})
    }
    handleDesired(val){
        this.setState({desiredAmount:val})
    }
  
   
    render(){
        return(
            <div>
                <div>Wizard</div>
                <input onChange={(e)=>this.handleMortgage(e.target.value)} placeholder='name'></input>               
                <input onChange={(e)=>this.handleDesired(e.target.value)} placeholder='name'></input>               
            </div>
        )
    }
}
export default Step3;