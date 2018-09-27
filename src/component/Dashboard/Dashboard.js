import React, {Component} from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';

class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            houseList:[],
        }
        this.getHouses=this.getHouses.bind(this);
    }
    getHouses(){
        axios.get('/api/houses').then((response)=>{
            console.log(response.data)
            const house = response.data;
            this.setState({houseList:house})
        })
    }
    

    //Calls the function to get houses from db.
    componentDidMount(){        
        this.getHouses();
    }

    //Deletes a house with current id and then gets updated house list from db.
    deleteHouse(id){
        axios.delete(`/api/houses/${id}`).then(response=>{
            console.log(response.data)
            this.getHouses();    
        })  
            
    }


    render(){
        const { houseList } = this.state;
        const houseListDisplay = houseList.map((house,index)=>{
            return(
               <House 
               key={index}
               id={house.id}
               name={house.name}
               address={house.address}
               city={house.city}
               states={house.states}
               zipcode={house.zipcode}
               image={house.image}
               monthlymortgage={house.monthlymortgage}
               desiredrent={house.desiredrent}
               delete={this.deleteHouse}
               houseList={this.state.houseList}
               getHouses={this.getHouses}
               
               

               />
         ) })
        return(
            <div>
                <div>Dashboard</div>
                
                <Link to="/Wizard/Step1">
                    <button>Navigate to Step 1</button>
                </Link>
                {houseListDisplay}
            </div>
        )
    }
}
export default Dashboard;