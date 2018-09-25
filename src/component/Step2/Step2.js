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
                <div>Step 2</div>
                <input onChange={(e)=>this.handleImage(e.target.value)} placeholder='name'></input>
                <Link to="/Wizard/Step1" ><button>Back</button></Link>
                <Link to='/Wizard/Step3'><button>Next</button></Link>               
            </div>
        )
    }
}
export default Step2;