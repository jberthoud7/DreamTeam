import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from '../pages/pagesStyles/Rank.module.css';
import { updateScores } from '../utils/updateScores';



function Rank(){
    const numberOfPlayersInDb = 16
    const img = require('../profilePic.jpg')

    const [p1Pts, setP1Pts] = useState('');
    const [p2Pts, setP2Pts] = useState('');
    const [p1Ast, setP1Ast] = useState('');
    const [p2Ast, setP2Ast] = useState('');
    const [p1Reb, setP1Reb] = useState('');
    const [p2Reb, setP2Reb] = useState('');
    const [p1Rating, setP1Rating] = useState('');    
    const [p2Rating, setP2Rating] = useState('');
    const [p1DreamTeamId, setP1DreamTeamId] = useState('');
    const [p2DreamTeamId, setP2DreamTeamId] = useState('');


    useEffect(() => {
        async function initialPageLoad(){
            let apiIds = await getPlayerInfo()
            getPlayerStats(apiIds)
        }

        initialPageLoad()
    }, [])

    let selectedPlayer;

    function getRandomNumbers(){
        const random1 = Math.ceil(Math.random() * numberOfPlayersInDb)
        let random2 = Math.ceil(Math.random() * numberOfPlayersInDb)

        setP1DreamTeamId(random1)
        setP2DreamTeamId(random2)

        //make sure we aren't comparing the same player to himself
        while (random2 === random1){
            random2 = Math.ceil(Math.random() * numberOfPlayersInDb)
        }

        return [random1, random2]
    }

    async function getPlayerInfo(){
        const randoms = getRandomNumbers()

        const res = await fetch("http://localhost:5000/dreamTeam/player1/" + randoms[0] + "/player2/" + randoms[1])
        const json = await res.json()

        const apiId1 = await json.player1.apiId
        const apiId2 = await json.player2.apiId

        const p1Rating = await json.player1.eloRating
        const p2Rating = await json.player2.eloRating

        setP1Rating(p1Rating)
        setP2Rating(p2Rating)
        
        return [apiId1, apiId2]
    }

    async function getPlayerStats(apiIds){
        let id1 = apiIds[0]
        let id2 = apiIds[1]

        try{
            console.log('making call to backend')
            const res = await fetch(`/dreamteam/getPlayerSeasonAvgs?player_ids[]=${id1}&player_ids[]=${id2}`)
            const json = await res.json()

            const p1Stats = json.data[0]
            setP1Pts(p1Stats.pts)
            setP1Ast(p1Stats.ast)
            setP1Reb(p1Stats.reb)
    
            const p2Stats = json.data[1]
            setP2Pts(p2Stats.pts)
            setP2Ast(p2Stats.ast)
            setP2Reb(p2Stats.reb)
        }
        catch(e){
            console.log('e    ' + e)
        }
    }

    function getSelectedRadioButton(){
        let radioButtons = document.getElementsByTagName("input")
        for(let i = 0; i < radioButtons.length; i++){
            if(radioButtons[i].checked){
                selectedPlayer = radioButtons[i].id
            }
        }
    }

    async function handleClick(e){
        e.preventDefault()

        getSelectedRadioButton()

        if(selectedPlayer == "p1Radio"){
            updateScores("p1", p1DreamTeamId, p1Rating, p2DreamTeamId, p2Rating)
            document.getElementById("p1Radio").checked = false
        }
        else if(selectedPlayer == "p2Radio"){
            updateScores("p2", p1DreamTeamId, p1Rating, p2DreamTeamId, p2Rating)
            document.getElementById("p2Radio").checked = false
        }
        else{
            //TODO: alert user they must select one
            console.log("Please select a player")
            return
        }


        //update screen to show new players
        let apiIds = await getPlayerInfo()
        getPlayerStats(apiIds)
    }



    return(
        <div>
            <Banner></Banner>
            <div className={classes.body}>
                <div className={classes.players}>
                    
                    <div className={classes.leftPlayerAndRadioDiv}>
                        <div className={classes.leftPlayerDiv}>
                            <Card className={classes.leftPlayer}>
                                <Card.Img variant='top' src={img} className={classes.img}></Card.Img> 
                                <Card.Body className={classes.cardBody}>
                                    <Card.Text>Points: {p1Pts} </Card.Text>
                                    <Card.Text>Assists: {p1Ast} </Card.Text>
                                    <Card.Text>Rebounds: {p1Reb} </Card.Text>
                                </Card.Body>
                            </Card>
                            
                        </div>
                        <div className={classes.leftRadio}>
                            <input type="radio" value="Select" name="playerRadio" id="p1Radio"  /> Select
                        </div>
                    </div>

                    <div className={classes.rightPlayerAndRadioDiv}>
                        <div className={classes.rightPlayerDiv}>
                            <Card className={classes.rightPlayer}>
                                <Card.Img variant='top' src={img} className={classes.img}></Card.Img>
                                <Card.Body className={classes.cardBody}>
                                    <Card.Text>Points: {p2Pts} </Card.Text>
                                    <Card.Text>Assists: {p2Ast} </Card.Text>
                                    <Card.Text>Rebounds: {p2Reb} </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className={classes.rightRadio}>
                            <input type="radio" value="Select" name="playerRadio" id="p2Radio" /> Select
                        </div>
                    </div>

                </div>

                <div className={classes.buttonDiv}>
                    <Button variant='primary' onClick={handleClick} className={classes.button}>
                        <p className={classes.buttonText}>Confirm Choice</p>
                    </Button>{' '}
                </div>

            </div>           
        </div>
    )
}

export default Rank