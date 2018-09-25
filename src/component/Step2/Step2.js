import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addImage} from '../../ducks/reducer';

class Step2 extends Component{
    constructor(){
        super()
        this.state={
            image:''     
        }
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
function mapStateToProps(state){
    const {image}=state;
    return {
        image
    }
}
export default connect(mapStateToProps,{addImage})(Step2);