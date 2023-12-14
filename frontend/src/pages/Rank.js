import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from '../pages/pagesStyles/Rank.module.css';



function Rank(){
    const numberOfPlayersInDb = 16
    const img = require('../profilePic.jpg')

    const [p1Pts, setP1Pts] = useState('');
    const [p2Pts, setP2Pts] = useState('');
    const [p1Ast, setP1Ast] = useState('');
    const [p2Ast, setP2Ast] = useState('');
    const [p1Reb, setP1Reb] = useState('');
    const [p2Reb, setP2Reb] = useState('');
    
    useEffect(() => {
        async function initialPageLoad(){
            let apiIds = await getPlayerIds()
            getPlayerStats(apiIds)
        }

        initialPageLoad()
    }, [])

    let selectedPlayer;

    function getRandomNumbers(){
        const random1 = Math.ceil(Math.random() * numberOfPlayersInDb)
        let random2 = Math.ceil(Math.random() * numberOfPlayersInDb)

        //make sure we aren't comparing the same player to himself
        while (random2 === random1){
            random2 = Math.ceil(Math.random() * numberOfPlayersInDb)
        }

        return [random1, random2]
    }

    async function getPlayerIds(){
        // console.log("in getPlayerIds")
        const randoms = getRandomNumbers()

        const res = await fetch("http://localhost:5000/dreamTeam/player1/" + randoms[0] + "/player2/" + randoms[1])
        const json = await res.json()

        const apiId1 = await json.player1.apiId
        const apiId2 = await json.player2.apiId

        // console.log("apiId1: " + apiId1)
        // console.log("apiId2: " + apiId2) 
        
        return [apiId1, apiId2]
    }

    async function getPlayerStats(apiIds){
        // console.log("in getPlayerStats")
        let id1 = apiIds[0]
        let id2 = apiIds[1]

        const res = await fetch("https://www.balldontlie.io/api/v1/season_averages?player_ids[]=" + id1 + "&player_ids[]=" + id2)
        const json = await res.json()

        const p1Stats = json.data[0]
        setP1Pts(p1Stats.pts)
        setP1Ast(p1Stats.ast)
        setP1Reb(p1Stats.reb)

        const p2Stats = json.data[1]
        setP2Pts(p2Stats.pts)
        setP2Ast(p2Stats.ast)
        setP2Reb(p2Stats.reb)

        // console.log(p1Stats)
    }

    function getSelectedRadioButton(){
        let radioButtons = document.getElementsByTagName("input")
        for(let i = 0; i < radioButtons.length; i++){
            if(radioButtons[i].checked){
                selectedPlayer = radioButtons[i].id
                console.log(selectedPlayer)
            }
        }
    }

    async function handleClick(e){
        console.log("in handleClick")
        e.preventDefault()

        getSelectedRadioButton()

        if(selectedPlayer == "p1Radio"){
            //TODO: calculate score update (p1 wins)

            document.getElementById("p1Radio").checked = false

        }
        else if(selectedPlayer == "p2Radio"){
            //TODO: calculate score update (p2 wins)

            document.getElementById("p2Radio").checked = false

        }
        else{
            //TODO: alert user they must select one
            console.log("Please select a player")
            return
        }


        let apiIds = await getPlayerIds()
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