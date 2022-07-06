import React, { useState } from 'react'
import classes from '../Card/Card.module.css'
import ArrowForwardIcon  from '@mui/icons-material/ArrowForward';
import DescriptionIcon from '@mui/icons-material/Description';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import AirIcon from '@mui/icons-material/Air';


export default function Card(props) {
  const [showCardBack , setIsShowBackCard]= useState(false);

  function showCardBackHandler(){
    setIsShowBackCard(!showCardBack)
  }
  const itemsArr = props?.day; 
  return (
    <main className={classes.main} onClick={showCardBackHandler}>
      <div className={`${classes.card_container} ${showCardBack ? classes.card_rotate : ''}`}>
        <div className={classes.front}>
              <div className={classes.day}>
              <h2> {props.city }</h2>
              <p>{itemsArr ? itemsArr.dt_txt : null}</p>
            </div>
            <div className={classes.desc}>
            { <img src={`http://openweathermap.org/img/wn/${itemsArr? itemsArr.weather[0].icon :"03n"}@2x.png`} alt="img"/>}
              <h1>{itemsArr ? (itemsArr.main.temp - 273).toFixed(1) :null} &deg;C</h1>
            </div>
            <div className={classes.details}>
              <p>More details</p>
              <i><ArrowForwardIcon/></i>
            </div>
        </div>
        <div className={classes.back}>
          <div className={classes.moredetail}>
            <i><DescriptionIcon/></i>
            <h2>Description :  { itemsArr.weather[0].description}</h2>
          </div>
          <div className={classes.moredetail}>
            <i><ThermostatIcon/></i>
            <h2>Humidity :  {itemsArr?.main?.humidity}</h2>
          </div>
          <div className={classes.moredetail}>
            <i><SevereColdIcon/></i>
            <h2>Pressure :  {itemsArr?.main?.pressure}</h2>
          </div>
          <div className={classes.moredetail}>
            <i><AirIcon/></i>
            <h2>Wind speed :  {itemsArr?.wind?.speed}</h2> 
          </div>
        </div>
      </div>
 

    </main>
  )
}
