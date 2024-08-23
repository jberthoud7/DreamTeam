import { Link } from "react-router-dom";
import classes from '../pages/pagesStyles/Start.module.css';

function Start(){
    return(
        <div>
            <div className={classes.linkDiv}>
                <Link to='/login' className={classes.link} >Login</Link>
                <Link to='/register' className={classes.link} >Register</Link>
            </div>
        </div>
    )
}

export default Start