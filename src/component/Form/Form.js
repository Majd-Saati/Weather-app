import React from 'react'
import classes from './Form.module.css'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
export default function Form (props) {
    
    function cityHandler(e){
      e.preventDefault();
      
      props.onSubmit(props.city);

    }


  return (
    <form onSubmit={cityHandler } >
        <div className={classes.form}>
          <div className={classes.content}>
              <label>City :</label>
              <input type='text'  value={props.city} onChange={(e)=>{props.setCity(e.currentTarget.value)}}  />
          </div>
            <div type='submit' className={classes.search}>
              <button type='submit' >
                 <i ><TravelExploreIcon/></i>
              </button>

          </div>
        </div>
        

    </form>
  )
}
