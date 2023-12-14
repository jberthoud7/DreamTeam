import { Link } from "react-router-dom";
import classes from '../pages/pagesStyles/Start.module.css';

function Start(){
    return(
        <div>
            <div className={classes.linkDiv}>
                {/* TODO: Update to go to login page */}
                <Link to='/dashboard' className={classes.link} >Login</Link>
                {/* TODO: Update to go to register page */}
                <Link to='/dashboard' className={classes.link} >Register</Link>
            </div>
        </div>
    )
}

export default Start