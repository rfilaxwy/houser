import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addProperty} from '../../ducks/reducer';

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

    addName(val){
        this.setState({name:val})
    }
    addAddress(val){
        this.setState({address:val})
    }
    addCity(val){
        this.setState({city:val})
    }
    addStates(val){
        this.setState({state:val})
    }
    addZipcode(val){
        this.setState({zipcode:val})
    }

    cancel(){
        this.setState({name:'',city:'',address:'',states:'',zipcode:''})
    }

   


    render(){
        const {addProperty} =this.props;
        return(
            <div>
                <div>Step 1</div>
                <input onChange={(e)=>this.addName(e.target.value)} placeholder='name'></input>
                <input onChange={(e)=>this.addAddress(e.target.value)} placeholder='address'></input>
                <input onChange={(e)=>this.addCity(e.target.value)} placeholder='city'></input>
                <input onChange={(e)=>this.addStates(e.target.value)} placeholder='state'></input>
                <input onChange={(e)=>this.addZipcode(e.target.value)} placeholder='zipcode'></input>
               <Link to="/Wizard/Step2" ><button onClick={()=>addProperty(this.state)}>Next</button></Link>
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
export default connect(mapStateToProps,{addProperty})(Step1);