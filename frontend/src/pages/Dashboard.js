import Banner from "../components/Banner"
import Ranking from "../components/Ranking"
import classes from '../pages/pagesStyles/Dashboard.module.css';
import React, { useEffect, useState } from 'react'



function Dashboard(){

    const [rank1Global, setRank1Global] = useState('')
    const [rank2Global, setRank2Global] = useState('')
    const [rank3Global, setRank3Global] = useState('')
    const [rank4Global, setRank4Global] = useState('')
    const [rank5Global, setRank5Global] = useState('')

    const [rating1Global, setRating1Global] = useState('')
    const [rating2Global, setRating2Global] = useState('')
    const [rating3Global, setRating3Global] = useState('')
    const [rating4Global, setRating4Global] = useState('')
    const [rating5Global, setRating5Global] = useState('')

    useEffect(() => {
        async function initialPageLoad(){
            let json = await getWorldRankings()
            setRank1Global(json[0].name)
            setRank2Global(json[1].name)
            setRank3Global(json[2].name)
            setRank4Global(json[3].name)
            setRank5Global(json[4].name)

            setRating1Global(truncateTo2Decimals(json[0].eloRating))
            setRating2Global(truncateTo2Decimals(json[1].eloRating))
            setRating3Global(truncateTo2Decimals(json[2].eloRating))
            setRating4Global(truncateTo2Decimals(json[3].eloRating))
            setRating5Global(truncateTo2Decimals(json[4].eloRating))
        }

        initialPageLoad()
    }, [])

    function truncateTo2Decimals(num){
        return num.toFixed(2)
    }

    async function getWorldRankings(){
        const res = await fetch("http://localhost:5000/dreamTeam/worldRankings")
        const json = await res.json()

        return json
    }




    return(
        <div>
            <Banner></Banner>
            <div className={classes.rankingDiv}>
                <div className={classes.myRankingsDiv}>
                    <Ranking 
                        title='My Rankings' 
                        rank1 = "1"
                        rank2 = "2"
                        rank3 = "3"
                        rank4 = "4"
                        rank5 = "5"
                        rating1 = "score 1"
                        rating2 = "score 2"
                        rating3 = "score 3"
                        rating4 = "score 4"
                        rating5 = "score 5"
                    ></Ranking>
                </div>
                <div className={classes.worldRankingsDiv}>
                    <Ranking 
                        title='World Rankings' 
                        rank1 = {rank1Global}
                        rank2 = {rank2Global}
                        rank3 = {rank3Global}
                        rank4 = {rank4Global}
                        rank5 = {rank5Global}
                        rating1 = {rating1Global}
                        rating2 = {rating2Global}
                        rating3 = {rating3Global}
                        rating4 = {rating4Global}
                        rating5 = {rating5Global}
                    ></Ranking>
                </div>
            </div>

        </div>
    )
}

export default Dashboard