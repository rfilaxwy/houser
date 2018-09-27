import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {addMonthlyMortgage,addDesiredRent} from '../../ducks/reducer';

class Step3 extends Component{
    constructor(){
        super()
        this.state={
            monthlymortgage:'',
            desiredrent:''     
        }
    }
    componentDidMount(){
        const {monthlymortgage,desiredrent}=this.props;
        this.setState({monthlymortgage:monthlymortgage,desiredrent:desiredrent})
    }
    handleDesiredRent(val){
        this.setState({desiredrent:val})
    }
    handleMonthlyMortgage(val){
        this.setState({monthlymortgage:val})
    }
    save(){
        const{name,address,city,states,zipcode,image,monthlymortgage,desiredrent}=this.props;
        axios.put('/api/houses', {name,address,city,states,zipcode,image,monthlymortgage,desiredrent}).then(()=>{
        })
    }
    
   
    render(){
        
        const {addMonthlyMortgage, addDesiredRent} =this.props;
        const{monthlymortgage,desiredrent}=this.state;
        return(
            <div>
                <div>Wizard</div>
                <input value={this.state.monthlymortgage} onChange={(e)=>{this.handleMonthlyMortgage(e.target.value);addMonthlyMortgage(monthlymortgage)}} placeholder='Monthly Mortgage'></input>               
                <input value={this.state.desiredrent} onChange={(e)=>{this.handleDesiredRent(e.target.value);addDesiredRent(desiredrent)}} placeholder='Desired Rent'></input>
                <Link to="/Wizard/Step2" ><button>Back</button></Link>
                <Link to='/'><button onClick={()=>this.save()}>Complete</button></Link>              
            </div>
        )
    }
}
function mapStateToProps(state){
    const {monthlymortgage, desiredrent,name,address,city,states,zipcode,image} = state;
    debugger
    return{
        monthlymortgage,
        desiredrent,
        name,
        address,
        city,
        states,
        zipcode,
        image
    }
}
export default connect(mapStateToProps,{addMonthlyMortgage,addDesiredRent})(Step3);