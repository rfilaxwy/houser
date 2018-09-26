const initialState = {
    name:'',
    address:'',
    city:'',
    states:'',
    zipcode:'',
    image:'',
    monthlyMortgage:'',
    desiredRent:''
}

//***used for all
const CANCEL_INPUTS = "CANCEL_INPUTS";

//Step 1
const ADD_PROPERTY = "ADD_PROPERTY";

//Step 2
const ADD_IMAGE = "ADD_IMAGE";
//Step 3

const ADD_MORTGAGE_PARAMS = 'ADD_MORTGAGE_PARAMS';

function reducer ( state = initialState, action ) {
    let { payload } = action ;
    switch( action.type ) {
        case ADD_PROPERTY:
            return Object.assign({},state,{name:payload.name,address:payload.address,city:payload.city,states:payload.states,zipcode:payload.zipcode});
        case ADD_MORTGAGE_PARAMS:
            return Object.assign({},state,{monthlyMortgage:payload.monthlyMortgage,desiredRent:payload.desiredRent});
        case ADD_IMAGE:
            return Object.assign({},state,{image:payload.image});
        case CANCEL_INPUTS:
            return Object.assign({},state,{})
        default: return state;
    }
}

//STEP 1
export function addProperty(name,address,city,states,zipcode){
    
    return {
        type: ADD_PROPERTY,
        payload:{name,address,city,states,zipcode}
    }
}

//Step 2
export function addImage(image){
    return{
        type:ADD_IMAGE,
        payload:{image}
    }
}

//Step 3

export function addMortgageParams(monthlyMortgage,desiredRent){
    return{
        type: ADD_MORTGAGE_PARAMS,
        payload:{monthlyMortgage,desiredRent}
    }
}

export function canceler(){
    return{
        type:CANCEL_INPUTS,
        payload: initialState
    }
}

export default reducer;