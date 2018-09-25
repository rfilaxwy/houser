import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addName, addAddress,addCity,addStates,addZipcode} from '../../ducks/reducer';

class Step1 extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            address:'',
            city:'',
            states:'',
            zipcode:''
        }
    }


    cancel(){
        this.setState({name:'',city:'',address:'',states:'',zipcode:''})
    }

   


    render(){
        return(
            <div>
                <div>Step 1</div>
                <input onChange={(e)=>this.addName(e.target.value)} placeholder='name'></input>
                <input onChange={(e)=>this.addAddress(e.target.value)} placeholder='address'></input>
                <input onChange={(e)=>this.addCity(e.target.value)} placeholder='city'></input>
                <input onChange={(e)=>this.addStates(e.target.value)} placeholder='state'></input>
                <input onChange={(e)=>this.addZipcode(e.target.value)} placeholder='zipcode'></input>
               <Link to="/Wizard/Step2" ><button>Next</button></Link>
            </div>
        )
    }
}
function mapStateToProps(state){
    const{name,address,city,states,zipcode}=state;
    return{
        name,
        address,
        city,
        states,
        zipcode
    }
}
export default connect(mapStateToProps,{addName,addAddress,addCity,addStates,addZipcode})(Step1);