import React from 'react';


export default function House(props){
    const {index}=props;
    
    return(
        <div id={props.id} key={index} className='houseCard'>
                
                <p>{props.name}</p>
                <p>{props.address}</p>
                <p>{props.city}</p>
                <p>{props.states}</p>
                <p>{props.zipcode}</p>
                <p>{props.image}</p>
                <p>{props.monthlymortgage}</p>
                <p>{props.desiredrent}</p>
                <button onClick={()=>{props.delete(props.id)}}>Delete</button>
        </div>
    )
}