import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class WizardLanding extends Component{
    render(){
        return(
            <div>

                <Link to='/Wizard/Step1'><button>Navigate to Step 1</button></Link>
            </div>
        )    
    }
}