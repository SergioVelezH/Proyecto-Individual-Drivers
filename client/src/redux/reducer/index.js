import { CREATE_NEW_DRIVER, FILTER_DRIVER_ORIGIN, FILTER_DRIVER_TEAM, GET_ALL_DRIVERS, GET_ALL_TEAMS, GET_BY_NAME, GET_DRIVER_BY_ID, ORDER_DRIVERS_ALFA, ORDER_DRIVERS_BORN} from "../actions";
import { calculateAge } from "../../helpers/age";

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
            const trimmedDrivers = state.stateCopy.map(driver => {
                if (driver.teams) {
                  return {
                    ...driver,
                    teams: driver.teams.split(",").map(team => team.trim())
                  };
                }
                return driver;
              });
            
                return {
                    ...state,
                    allDrivers: trimmedDrivers.filter(driver => driver.teams && driver.teams.includes(action.payload))
              };
        case ORDER_DRIVERS_ALFA:
            switch(action.payload){
                case "AZ":
                    return{
                        ...state,
                        stateCopy:state.allDrivers,
                        allDrivers: state.stateCopy.sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }))
                    }
                case "ZA":
                    return{
                        ...state,
                        stateCopy:state.allDrivers,
                        allDrivers: state.stateCopy.sort((a, b) => b.name.localeCompare(a.name, 'es', { sensitivity: 'base' }))
                    }    

            }
        case ORDER_DRIVERS_BORN:
            switch(action.payload){
                case "YOUNGEST":
                    return{
                        ...state,
                        stateCopy:state.allDrivers,
                        allDrivers: state.stateCopy.sort((a, b) => {
                            const dateA = new Date(a.birthDate);
                            const dateB = new Date(b.birthDate);
                        
                            const ageA = calculateAge(dateA);
                            const ageB = calculateAge(dateB);
                        
                            return ageA - ageB;
                      })
                    }
                case "OLDER":
                    return{
                        ...state,
                        stateCopy:state.allDrivers,
                        allDrivers: state.stateCopy.sort((a, b) => {
                            const dateA = new Date(a.birthDate);
                            const dateB = new Date(b.birthDate);
                        
                            const ageA = calculateAge(dateA);
                            const ageB = calculateAge(dateB);
                        
                            return ageB - ageA;
                      })
                    }
                }        
            
            
            default:
                return state;
            }
        };
        
        export default rootReducer;
        
        
        // return{
        //     ...state,
        //     stateCopy:state.allDrivers,
        //     allDrivers:state.stateCopy.filter((driver) => driver.teams.split(",").join("") === action.payload )

        // }
        
        
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