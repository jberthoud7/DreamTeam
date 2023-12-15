
function calculate(thisCurrentRating, otherCurrentRating, isWin){
    let diff = (thisCurrentRating - otherCurrentRating) / 400
    let denominator = 1 + Math.pow(10, diff)
    let probabilityOfWin = 1 / denominator

    if(isWin){
        return (parseInt(thisCurrentRating) + ( 32 * (1 - probabilityOfWin)))
    }
    else{
        return (parseInt(thisCurrentRating) + ( 32 * (0 - probabilityOfWin)))
    }
}



export async function updateScores(winner, p1DreamTeamId, p1CurrentRating, p2DreamTeamId, p2CurrentRating){
   
    let p1NewRating
    let p2NewRating

    if(winner == "p1"){
        // console.log("p1 win in updateScores")
        p1NewRating = calculate(p1CurrentRating, p2CurrentRating, true)
        p2NewRating = calculate(p2CurrentRating, p1CurrentRating, false)
    }
    else{
        // console.log("p2 win in updateScores")
        p1NewRating = calculate(p1CurrentRating, p2CurrentRating, false)
        p2NewRating = calculate(p2CurrentRating, p1CurrentRating, true)
    }

    const body1 = {
        dreamTeamId: p1DreamTeamId,
        newRating: p1NewRating
    }
    
    const body2 = {
        dreamTeamId: p2DreamTeamId,
        newRating: p2NewRating
    }

    const requestOptions1 = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body1)
    }

    const requestOptions2 = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body2)
    }

    await fetch("http://localhost:5000/dreamTeam/updateRating", requestOptions1)
    await fetch("http://localhost:5000/dreamTeam/updateRating", requestOptions2)

}

