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
    componentDidMount(){  
        const {name,address,city,states,zipcode}=this.props;
        this.setState({name:name,address:address,city:city,states:states,zipcode:zipcode})
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
        this.setState({states:val})
    }
    addZipcode(val){
        this.setState({zipcode:val})
    }

    cancel(){
        this.setState({name:'',city:'',address:'',states:'',zipcode:''})
    }

   


    render(){
        const {addProperty} =this.props;
        const {name,address,city,states,zipcode} =this.state;
        return(
            <div>
                <div>Step 1</div>
                <input value={name} onChange={(e)=>this.addName(e.target.value)} placeholder='name'></input>
                <input value={address} onChange={(e)=>this.addAddress(e.target.value)} placeholder='address'></input>
                <input value={city} onChange={(e)=>this.addCity(e.target.value)} placeholder='city'></input>
                <input value={states} onChange={(e)=>this.addStates(e.target.value)} placeholder='state'></input>
                <input value={zipcode} onChange={(e)=>this.addZipcode(e.target.value)} placeholder='zipcode'></input>
               <Link to="/Wizard/Step2" ><button onClick={()=>{addProperty(name,address,city,states,zipcode)}}>Next step</button></Link>
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