import classes from '../components/componentsStyles/Ranking.module.css'

function Ranking(props){

    return(
        <div className={classes.rankingContainer}>
            <div>
                <h2>{props.title}</h2>
            </div>
            <div>
                <ul className={classes.list}>
                    <li>{props.rank1}:  {props.rating1}</li>
                    <li>{props.rank2}:  {props.rating2}</li>
                    <li>{props.rank3}:  {props.rating3}</li>
                    <li>{props.rank4}:  {props.rating4}</li>
                    <li>{props.rank5}:  {props.rating5}</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Ranking