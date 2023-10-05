import { CREATE_NEW_DRIVER, FILTER_DRIVER_ORIGIN, FILTER_DRIVER_TEAM, GET_ALL_DRIVERS, GET_ALL_TEAMS, GET_BY_NAME, GET_DRIVER_BY_ID} from "../actions";

let initialState = {allDrivers: [],stateCopy:[], allEscuderias: [], driverId: []};

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
        case GET_DRIVER_BY_ID:
            return{
                ...state,
                driverId:action.payload,
            }
        case GET_ALL_TEAMS:
            return{
                ...state,
                allEscuderias:action.payload,
                }                        
        case FILTER_DRIVER_ORIGIN:
            switch(action.payload){
                case "BDD":
                    return{
                            ...state,
                            stateCopy:state.allDrivers,
                            allDrivers:state.stateCopy.filter((driver) => isNaN(Number(driver.id))),
                            
                        }
                case "API":
                    return{
                            ...state,
                            stateCopy:state.allDrivers,
                            allDrivers:state.stateCopy.filter((driver) => !isNaN(Number(driver.id))),
                           
                        }
                        default:
                            return{
                                ...state
                            }
                    
                    }
        case FILTER_DRIVER_TEAM:
            return{
                ...state,
                stateCopy:state.allDrivers,
                allDrivers:state.stateCopy.filter((driver) => driver.teams.split(",") === action.payload )

            }
            
            


            default:
                return state;
            }
        };
        
        export default rootReducer;
        
        
        
        
        // switch(action.payload){
            //     case "API":
            //         return{
                //             ...state,
                //             allDrivers:state.allDrivers.filter((driver) => !isNaN(Number(driver.id)))
                //         }
                //     case "BDD":
                //         return{
                    //             ...state,
                    //             allDrivers:state.allDrivers.filter((driver) => isNaN(Number(driver.id)))
                    //         }
                    //     default:
                    
                    // }



                    // let filteredDrivers;
                    // switch (action.payload) {
                    //     case "API":
                    //         filteredDrivers = state.allDrivers.filter((driver) => (!isNaN(Number(driver.id))));
                    //             break;
                    //     case "BDD":
                    //         filteredDrivers = state.allDrivers.filter((driver) => isNaN(Number(driver.id)));
                    //             break;
                    //     default:
                    //         filteredDrivers = state.allDrivers;
                    // }
            
                    //     return {
                    //         ...state,
                    //         copyDrivers: filteredDrivers, // Guarda la copia filtrada en copyDrivers
                    // };