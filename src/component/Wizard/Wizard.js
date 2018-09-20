import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Wizard extends Component{
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
                <div>Wizard</div>
                <input onChange={(e)=>this.handleName(e.target.value)} placeholder='name'></input>
                <input onChange={(e)=>this.handleAddress(e.target.value)} placeholder='address'></input>
                <input onChange={(e)=>this.handleCity(e.target.value)} placeholder='city'></input>
                <input onChange={(e)=>this.handleState(e.target.value)} placeholder='state'></input>
                <input onChange={(e)=>this.handleZip(e.target.value)} placeholder='zipcode'></input>
                <Link to="/">
                    <button onClick={()=>this.cancel}>Cancel</button>
                </Link>
            </div>
        )
    }
}