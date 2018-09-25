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
    handleImage(val){
        this.setState({image:val});
    }
  
   
    render(){
        const {addImage}=this.props;
        return(
            <div>
                <div>Step 2</div>
                <input onChange={(e)=>this.handleImage(e.target.value)} placeholder='name'></input>
                <Link to="/Wizard/Step1" ><button>Back</button></Link>
                <Link to='/Wizard/Step3'><button onClick={()=>{addImage(this.state)}}>Next</button></Link>               
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