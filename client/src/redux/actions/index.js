import axios from "axios";

export const GET_ALL_DRIVERS = "GET_ALL_DRIVERS";
export const GET_BY_NAME = "GET_BY_NAME";
export const CREATE_NEW_DRIVER = "CREATE_NEW_DRIVER";

export function getAllDrivers(){
    return async function (dispatch){
        const response = await axios("http://localhost:3001/drivers");
    return dispatch({
        type:"GET_ALL_DRIVERS",
        payload:response.data
    })    
    }
};

export function getByName(name){
    return async function (dispatch){
        const response = await axios(`http://localhost:3001/drivers?name=${name}`);
    return dispatch({
        type:"GET_BY_NAME",
        payload:response.data
    })    
    }
};


export function createNewDriver(body){
    return async function (dispatch){
        const response = await axios.post(`http://localhost:3001/drivers`, body);
    return dispatch({
        type:"CREATE_NEW_DRIVER",
        payload:response.data
    })    
    }
};