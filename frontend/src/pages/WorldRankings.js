import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Button from 'react-bootstrap/Button'
import Ranking from '../components/Ranking'
import classes from '../pages/pagesStyles/WorldRankings.module.css'

function WorldRankings(){

    const [rank1, setRank1] = useState('')
    const [rank2, setRank2] = useState('')
    const [rank3, setRank3] = useState('')
    const [rank4, setRank4] = useState('')
    const [rank5, setRank5] = useState('')

    const [rating1, setRating1] = useState('')
    const [rating2, setRating2] = useState('')
    const [rating3, setRating3] = useState('')
    const [rating4, setRating4] = useState('')
    const [rating5, setRating5] = useState('')

    useEffect(() => {
        async function initialPageLoad(){
            let json = await getWorldRankings()
            setRank1(json[0].name)
            setRank2(json[1].name)
            setRank3(json[2].name)
            setRank4(json[3].name)
            setRank5(json[4].name)

            setRating1(truncateTo2Decimals(json[0].eloRating))
            setRating2(truncateTo2Decimals(json[1].eloRating))
            setRating3(truncateTo2Decimals(json[2].eloRating))
            setRating4(truncateTo2Decimals(json[3].eloRating))
            setRating5(truncateTo2Decimals(json[4].eloRating))
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

    // async function handleClick(e){
    //     e.preventDefault()

    //     getWorldRankings()

    // }

    return(
        <div>
            <Banner></Banner>

            <div className={classes.rankingsContainer}>
                <Ranking 
                    title="World Rankings"
                    rank1 = {rank1}
                    rank2 = {rank2}
                    rank3 = {rank3}
                    rank4 = {rank4}
                    rank5 = {rank5}
                    rating1 = {rating1}
                    rating2 = {rating2}
                    rating3 = {rating3}
                    rating4 = {rating4}
                    rating5 = {rating5}
                > </Ranking>


            </div>






            {/* <div className={classes.buttonDiv}>
                <Button variant='primary' onClick={handleClick} className={classes.button}>
                    <p className={classes.buttonText}>Load next 5</p>
                </Button>{' '}
            </div> */}
        
        </div>
    )
}

export default WorldRankings