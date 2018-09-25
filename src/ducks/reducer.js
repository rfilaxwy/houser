const initialState = {
    name:'',
    address:'',
    city:'',
    state:'',
    zipcode:'',
    image:'',
    monthly_mortgage:'',
    desired_rent:''
}
//Step 1
const ADD_PROPERTY = "ADD_PROPERTY";

//Step 2
const ADD_IMAGE = "ADD_IMAGE";
//Step 3

const ADD_MORTGAGE_PARAMS = 'ADD_MORTGAGE_PARAMS';





export default function reducer ( state = initialState, action ) {
    let { payload } = action ;
    switch( action.type ) {
        case ADD_PROPERTY:
            return Object.assign({},state,{addProperty:payload});
        case ADD_MORTGAGE_PARAMS:
            return Object.assign({},state,{addMortgageParams:payload});
        case ADD_IMAGE:
            return Object.assign({},state,{addImage:payload});
       
        default: return state;
    }
}

//STEP 1
export function addProperty(name,address,city,state,zipcode){
    return {
        type: addProperty,
        payload:{name,address,city,state,zipcode}
    }
}


//Step 2
export function addImage(image){
    return{
        type:ADD_IMAGE,
        payload:image
    }
}

//Step 3

export function addMortgageParams(monthlyMortgage,desiredRent){
    return{
        type: ADD_MORTGAGE_PARAMS,
        payload:{monthlyMortgage,desiredRent}
    }
}
