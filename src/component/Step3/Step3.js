import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {addMortgageParams} from '../../ducks/reducer';

class Step3 extends Component{
    constructor(){
        super()
        this.state={
            monthlyMortgage:'',
            desiredRent:''     
        }
    }
   
    handleDesiredRent(val){
        this.setState({desiredRent:val})
    }
    handleMonthlyMortgage(val){
        this.setState({monthlyMortgage:val})
    }
    
        // axios.put('/api/houses', house).then(()=>{
        //     // this.props.redirect('/step2')

        //     // Need to get redirect working

        // })
    
   
    render(){
        const {addMortgageParams} =this.props;
        return(
            <div>
                <div>Wizard</div>
                <input onChange={(e)=>this.handleMortgage(e.target.value)} placeholder='name'></input>               
                <input onChange={(e)=>this.handleDesired(e.target.value)} placeholder='name'></input>
                <Link to="/Wizard/Step1" ><button>Back</button></Link>
                <Link to='/'><button 
                    onClick={()=>{addMortgageParams(this.state)}}
                    >Complete</button></Link> 
                
                             
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
export default connect(mapStateToProps,{addMortgageParams})(Step3);