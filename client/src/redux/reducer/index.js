import { CREATE_NEW_DRIVER, GET_ALL_DRIVERS, GET_BY_NAME } from "../actions";

let initialState = {allDrivers: [],stateCopy:[], allEscuderias: []};

function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_ALL_DRIVERS:
            return{
                ...state,
                allDrivers:action.payload,
                stateCopy:action.payload
            }
        case GET_BY_NAME:
            return{
                ...state,
                allDrivers:action.payload,
            }
        case CREATE_NEW_DRIVER:
            return{
                ...state,
                allDrivers:action.payload,
                }         
            
        default:
            return state;
    }
};

export default rootReducer;