import React from 'react';


export default function House(props){
    const {index}=props;
    
    return(
        <div id={props.id} key={index} className='houseCard'>
                
                <p>{props.name}</p>
                <p>{props.address}</p>
                <p>{props.city}</p>
                <p>{props.state}</p>
                <p>{props.zipcode}</p>
                <button onClick={()=>{props.delete(props.id)}}>Delete</button>
        </div>
    )
}