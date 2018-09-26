import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect }  from 'react-redux';
import {canceler} from '../../ducks/reducer'

 class Wizard extends Component{
    render(){
        const {canceler}=this.props;
        return(
            <div>
                {this.props.children}
                <Link to="/">
                    <button onClick={()=>canceler()}>Cancel</button>
                </Link>
            </div>
        )    
    }
}
export default connect(null,{canceler})(Wizard)