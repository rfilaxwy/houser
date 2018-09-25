import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {addDesiredRent, addMonthlyMortgage} from '../../ducks/reducer';

class Step3 extends Component{
    constructor(){
        super()
        this.state={
            monthlyMortgage:'',
            desiredRent:''     
        }
    }
   
    
    saveHouse(){
        const house ={
            name:this.state.name,
            address:this.state.address,
            city:this.state.city,
            state:this.state.state,
            zipcode:this.state.zipcode
        }
        axios.put('/api/houses', house).then(()=>{
            // this.props.redirect('/step2')

            // Need to get redirect working

        })
    }
   
    render(){
        
        return(
            <div>
                <div>Wizard</div>
                <input onChange={(e)=>this.handleMortgage(e.target.value)} placeholder='name'></input>               
                <input onChange={(e)=>this.handleDesired(e.target.value)} placeholder='name'></input>
                <Link to="/Wizard/Step1" ><button>Back</button></Link>
                <Link to='/'><button onClick={()=>{this.saveHouse()}}>Complete</button></Link> 
                
                             
            </div>
        )
    }
}
function mapStateToProps(state){
    const {monthlyMortgage, desiredRent} = state;
    return{
        monthlyMortgage,
        desiredRent
    }
}
export default connect(mapStateToProps,{addMonthlyMortgage,addDesiredRent})(Step3);