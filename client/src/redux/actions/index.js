import axios from "axios";

export const GET_ALL_DRIVERS = "GET_ALL_DRIVERS";

export function getAllDrivers(){
    return async function (dispatch){
        const response = await axios("");
    return dispatch({
        type:"GET_ALL_DRIVERS",
        payload:response.data
    })    
    }
};