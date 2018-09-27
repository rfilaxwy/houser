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
    componentDidMount(){
        const {monthlyMortgage,desiredRent}=this.props;
        this.setState({monthlyMortgage:monthlyMortgage,desiredRent:desiredRent})
    }
    handleDesiredRent(val){
        this.setState({desiredRent:val})
    }
    handleMonthlyMortgage(val){
        this.setState({monthlyMortgage:val})
    }
    save(){
        debugger
        const{name,address,city,states,image,monthlyMortgage,desiredRent}=this.props;
        debugger
        console.log(this.props);
        axios.put('/api/houses', {name,address,city,states,image,monthlyMortgage,desiredRent}).then(()=>{
            debugger
            // this.props.redirect('/step2')

            // Need to get redirect working

        })
    }
    
   
    render(){
        console.log(this.props)
        const {addMortgageParams} =this.props;
        const{monthlyMortgage,desiredRent}=this.state;
        return(
            <div>
                <div>Wizard</div>
                <input value={this.state.monthlyMortgage} onChange={(e)=>this.handleMonthlyMortgage(e.target.value)} placeholder='Monthly Mortgage'></input>               
                <input value={this.state.desiredRent} onChange={(e)=>this.handleDesiredRent(e.target.value)} placeholder='Desired Rent'></input>
                <Link to="/Wizard/Step2" ><button onClick={()=>{addMortgageParams(monthlyMortgage,desiredRent)}}>Back</button></Link>
                <Link to='/'><button
                    onClick={()=>{addMortgageParams(monthlyMortgage,desiredRent);this.save()}}
                    
                    >Complete</button></Link>              
            </div>
        )
    }
}
function mapStateToProps(state){
    const {monthlyMortgage, desiredRent,name,address,city,states,image} = state;
    return{
        monthlyMortgage,
        desiredRent,
        name,
        address,
        city,
        states,
        image
    }
}
export default connect(mapStateToProps,{addMortgageParams})(Step3);