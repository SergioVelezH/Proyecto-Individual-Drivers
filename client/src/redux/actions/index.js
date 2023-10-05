import axios from "axios";

export const GET_ALL_DRIVERS = "GET_ALL_DRIVERS";
export const GET_BY_NAME = "GET_BY_NAME";
export const CREATE_NEW_DRIVER = "CREATE_NEW_DRIVER";
export const GET_DRIVER_BY_ID = "GET_DRIVER_BY_ID";
export const GET_ALL_TEAMS = "GET_ALL_TEAMS";
export const FILTER_DRIVER_TEAM = "FILTER_DRIVER_TEAM";
export const FILTER_DRIVER_ORIGIN = "FILTER_DRIVER_ORIGIN";
export const ORDER_DRIVERS_ALFA = "ORDER_DRIVERS_ALFA";
export const ORDER_DRIVERS_BORN = "ORDER_DRIVERS_BORN";

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
        const response = await axios.post(`http://localhost:3001/drivers`,body);
    return dispatch({
        type:"CREATE_NEW_DRIVER",
        payload:response.data
    })    
    }
};

export function getDriverById(id){
    return async function (dispatch){
        const response = await axios(`http://localhost:3001/drivers/${id}`);
    return dispatch({
        type:"GET_DRIVER_BY_ID",
        payload:response.data
    })    
    }
};


export function getAllTeams(){
    return async function (dispatch){
        const response = await axios(`http://localhost:3001/teams`);
    return dispatch({
        type:"GET_ALL_TEAMS",
        payload:response.data
    })    
    }
};


export function filterDriverTeam(filtro){
    return{
        type: FILTER_DRIVER_TEAM,
        payload: filtro,
    }
};

export function filterDriverOrigin(filtro){
    return{
        type: FILTER_DRIVER_ORIGIN,
        payload: filtro,
    }
};

export const orderDriversAlfa = (order)=>{
    return{
        type: ORDER_DRIVERS_ALFA,
        payload: order,
    }
};

export const orderDriversBorn = (order)=>{
    return{
        type: ORDER_DRIVERS_BORN,
        payload: order,
    }
};