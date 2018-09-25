const initialState = {
    name:,
    address:,
    city:,
    state:,
    zipcode:,
    image:,
    monthly_mortgage:,
    desired_rent:
}
export default function reducer ( state = initialState, action ) {
    let { payload } = action ;
    switch( action.type ) {
        default: return state;
    }
}