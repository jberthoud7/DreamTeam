import { Link } from "react-router-dom";
import classes from '../components/componentsStyles/Banner.module.css'


function Banner(){
    return(
        <div className={classes.container}>

            <div className={classes.leftDiv}>
                <Link to='/dashboard' className={classes.link}>HOME</Link>
            </div>

            <div className={classes.centerDiv}>
                <Link to='/myRankings' className={classes.link}>My Rankings</Link>
                <Link to='/rank' className={classes.link}>Rank Players</Link>
                <Link to='/worldRankings' className={classes.link}>World Rankings</Link>

            </div>

            <div className={classes.rightDiv}>
                <Link to='/account' className={classes.link}> ACCOUNT </Link>
            </div>

        </div>
    )
}

export default Banner