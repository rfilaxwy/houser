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
const ADD_NAME = "ADD_NAME";
const ADD_ADDRESS = "ADD_ADDRESS";
const ADD_CITY = "ADD_CITY";
const ADD_STATES = "ADD_STATES";
const ADD_ZIPCODE = "ADD_ZIPCODE";
//Step 2
const ADD_IMAGE = "ADD_IMAGE";
//Step 3
const ADD_MONTHLY_MORTGAGE = "ADD_MONTHLY_MORTGAGE";
const ADD_DESIRED_RENT = "ADD_DESIRED_RENT";





export default function reducer ( state = initialState, action ) {
    let { payload } = action ;
    switch( action.type ) {
        case ADD_NAME:
            return Object.assign({},state,{addName:action.payload});
        case ADD_ADDRESS:
            return Object.assign({},state,{addAddress:action.payload});
        case ADD_CITY:
            return Object.assign({},state,{addCity:action.payload});
        case ADD_STATES:
            return Object.assign({},state,{s:action.payload});
        case ADD_ZIPCODE:
            return Object.assign({},state,{addZipcode:action.payload});
        case ADD_MONTHLY_MORTGAGE:
            return Object.assign({},state,{addMonthlyMortgage:action.payload});
        case ADD_DESIRED_RENT:
            return Object.assign({},state,{addDesiredRent:action.payload});
        case ADD_IMAGE:
            return Object.assign({},state,{addImage:action.payload});
       
        default: return state;
    }
}

//STEP 1
export function addName(name){
    return{
        type:ADD_NAME,
        payload:name
    }
}
export function addAddress(address){
    return{
        type: ADD_ADDRESS,
        payload:address
    }
}
export function addCity(city){
    return{
        type: ADD_CITY,
        payload:city
    }
}
export function addStates(states){
    return{
        type:ADD_STATES,
        payload:states
    }
}
export function addZipcode(zipcode){
    return{
        type: ADD_ZIPCODE,
        payload: zipcode
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