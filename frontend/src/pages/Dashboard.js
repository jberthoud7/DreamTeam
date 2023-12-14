import Banner from "../components/Banner"
import Ranking from "../components/Ranking"
import classes from '../pages/pagesStyles/Dashboard.module.css';


function Dashboard(){
    return(
        <div>
            <Banner></Banner>
            <div className={classes.rankingDiv}>
                <div className={classes.myRankingsDiv}>
                    <Ranking title='My Rankings' ></Ranking>
                </div>
                <div className={classes.worldRankingsDiv}>
                    <Ranking title='World Rankings' ></Ranking>
                </div>
            </div>

        </div>
    )
}

export default Dashboard