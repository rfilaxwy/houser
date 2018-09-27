import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addImage} from '../../ducks/reducer';

class Step2 extends Component{
    constructor(){
        super()
        this.state={
            image:''     
        }
    }
    componentDidMount(){
        const {image} = this.props;
        this.setState({image:image})
    }

    addHandleImage(val){
        this.setState({image:val});
    }
   
    render(){
        const {addImage}=this.props;
        const{image}=this.state;
        return(
            <div>
                <div>Step 2</div>
                <input value={image} onChange={(e)=>this.addHandleImage(e.target.value)} placeholder='Image'></input>
                <Link to='/Wizard/Step1'><button onClick={()=>{addImage(image)}}>Back</button></Link>
                <Link to='/Wizard/Step3'><button onClick={()=>{addImage(image)}}>Next step</button></Link>               
            </div>
        )
    }
}
function mapStateToProps(state){
    const {image}=state;
    return {
        image
    }
}
export default connect(mapStateToProps,{addImage})(Step2);