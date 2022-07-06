import React from 'react'
import { Skeleton } from '@mui/material';
import classes from './CardSkeleton.module.css'
export default function CardSkeleton(props) {
    const fiveCardsSkeleton = Array(props.num).fill(0).map((item , idx)=>{
        return(
            <div className={classes.card_skelton} key={idx}>
            <div className={classes.day}>
                <Skeleton animation="wave" width={60} /> 
                <Skeleton animation="wave" width={180}/>
            </div>
            <div className={classes.desc}>
                <Skeleton circle width={50} height={70}  />
                <Skeleton animation="wave" width={20} variant="h1" sx={{ marginTop:'90px' }} />
            </div>
            <div className={classes.details}>
                <Skeleton animation="wave"/>
            </div>
    
        </div>
        )
    }
    )
return(
    <div className={classes.main}>
        {fiveCardsSkeleton}
    </div>


)

}
