import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Wizard extends Component{
    render(){
        return(
            <div>
                <Link to="/">
                    <button onClick={()=>this.cancel}>Cancel</button>
                </Link>
            </div>
        )    
    }
}