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

const ADD_MONTHLY_MORTGAGE = 'ADD_MONTHLY_MORTGAGE';
const ADD_DESIRED_RENT = 'ADD_DESIRED_RENT';

function reducer ( state = initialState, action ) {
    let { payload } = action ;
    switch( action.type ) {
        case ADD_PROPERTY:
            return Object.assign({},state,{name:payload.name,address:payload.address,city:payload.city,states:payload.states,zipcode:payload.zipcode});
        case ADD_MONTHLY_MORTGAGE:
            return Object.assign({},state,{monthlyMortgage:payload.monthlyMortgage});
        case ADD_DESIRED_RENT:
            return Object.assign({}, state,{desiredRent:payload.desiredRent})
        case ADD_IMAGE:
            return Object.assign({},state,{image:payload.image});
        case CANCEL_INPUTS:
            return Object.assign({},state,{})
        default: return state;
    }
}

//STEP 1
export function addProperty(name,address,city,states,zipcode){
    debugger
    return {
        type: ADD_PROPERTY,
        payload:{name,address,city,states,zipcode}
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

export function addMonthlyMortgage(monthlyMortgage){
    return{
        type: ADD_MONTHLY_MORTGAGE,
        payload:monthlyMortgage
    }
}
export function addDesiredRent(desiredRent){
    return{
        type: ADD_DESIRED_RENT,
        payload:desiredRent
    }
}
export function canceler(){
    return{
        type:CANCEL_INPUTS,
        payload: initialState
    }
}

export default reducer;