import React, {Component} from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            houseList:['blue house','red house'],
        }
    }
    componentDidMount(){
        axios.get
    }
    render(){
        const { houseList } = this.state;
        const houseListDisplay = houseList.map((house,index)=>{
            return(
                <div key={index}>{house}</div>
            )
        })
        return(
            <div>
                <div>Dashboard</div>
                < House />
                <Link to="/Wizard">
                    <button>Add New Property</button>
                </Link>
                {houseListDisplay}
            </div>
        )
    }
}
export default Dashboard;