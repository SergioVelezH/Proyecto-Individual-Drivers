import { useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import './detail.css'
import { getAllTeams, getDriverById } from '../../redux/actions';
import Point from '../../components/point/point';

function Detail() {
  
  const dispatch = useDispatch();
  const driver = useSelector((state) => state.driverId);
  const { id } = useParams();
  console.log(driver);

  useEffect(() => {
    dispatch(getDriverById(id))
  },[id])

  useEffect(() => {
    dispatch(getAllTeams)
  },[])
 

  return (
    <div>
      {Array.isArray(driver) ? driver?.map((driver) => <Point driver={driver} />) : <Point driver={driver}/>}
    </div>
  )
}

export default Detail;

