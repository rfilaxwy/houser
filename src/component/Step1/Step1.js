import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Step1 extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            address:'',
            city:'',
            state:'',
            zipcode:''
        }
    }

    handleName(val){
        console.log(val)
        this.setState({name:val})
    }
    handleAddress(val){
        this.setState({address:val})
    }
    handleCity(val){
        this.setState({city:val})
    }
    handleState(val){
        this.setState({state:val})
    }
    handleZip(val){
        this.setState({zipcode:val})
    }
    cancel(){
        this.setState({name:'',city:'',address:'',state:'',zipcode:''})
    }

   


    render(){
        return(
            <div>
                <div>Step 1</div>
                <input onChange={(e)=>this.handleName(e.target.value)} placeholder='name'></input>
                <input onChange={(e)=>this.handleAddress(e.target.value)} placeholder='address'></input>
                <input onChange={(e)=>this.handleCity(e.target.value)} placeholder='city'></input>
                <input onChange={(e)=>this.handleState(e.target.value)} placeholder='state'></input>
                <input onChange={(e)=>this.handleZip(e.target.value)} placeholder='zipcode'></input>
               <Link to="/Wizard/Step2" ><button>Next</button></Link>
            </div>
        )
    }
}
function mapStateToProps(state){
    const{name,address,city,state,zipcode}=state;
    return{
        name,
        address,
        city,
        state,
        zipcode
    }
}
export default connect(mapStateToProps,{updateName,updateAddress,updateCity,updateState,updateZipcode})(Step1);