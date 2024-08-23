const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const getUser = asyncHandler(async(req, res) => {

    try{
        const username = req.params.username
        console.log("name:" +  username)
    
        const user = await User.findOne({"username": username})
    
        if(user == null || user == undefined){
            res.status(400).json({msg: 'User does not exist'})
        }
        else{
            res.status(200).json(user)
        }
    
    } catch (error) {
        console.error('Error fetching user:', error)
        res.status(500).json({ error: 'Failed to get user', details: error.message })
    }
})


const loginUser = asyncHandler(async(req, res) => {
    console.log('in login useraa')

    const username = req.body.username
    const hashedPassword = req.body.hashedPassword
    const enteredPassword = req.body.enteredPassword

    // const rawUser = await fetch("/dreamTeam/getUser/" + username)
    // console.log(rawUser)
    // const user = user.json()
    // console.log(user)

    // if(rawUser.status === 400){
    //     res.status(400).json({msg: 'User does not exist'})
    // }
    // else if(rawUser.status === 500){
    //     res.status(500).json({error: 'Failed to login', details: error.message})
    // }
    
    console.log('hash: ' + hashedPassword)
    console.log('pswd: ' + enteredPassword)

    const isValid = await bcrypt.compare(enteredPassword, hashedPassword)

    if(!isValid){
        res.status(401).json({msg: 'Incorrect Password'})
    }
    else{
        res.status(200).json({msg: 'Login Successful'})
    }
    
    // const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // res.cookie('token', token, { httpOnly: true }).send('Logged in');


})


const registerUser = asyncHandler(async(req, res) => {

    const user = req.body.username
    //pswd is already hashed coming from frontend
    const pswd = req.body.password
    console.log(111111111)
    console.log(req.body)

    const newUser = await User.create({
        username: user,
        password: pswd,
        rankings: [
            {dreamTeamId: 1, myEloRating: 1000},
            {dreamTeamId: 2, myEloRating: 1000},
            {dreamTeamId: 3, myEloRating: 1000},
            {dreamTeamId: 4, myEloRating: 1000},
            {dreamTeamId: 5, myEloRating: 1000},
            {dreamTeamId: 6, myEloRating: 1000},
            {dreamTeamId: 7, myEloRating: 1000},
            {dreamTeamId: 8, myEloRating: 1000},
            {dreamTeamId: 9, myEloRating: 1000},
            {dreamTeamId: 10, myEloRating: 1000},
            {dreamTeamId: 11, myEloRating: 1000},
            {dreamTeamId: 12, myEloRating: 1000},
            {dreamTeamId: 13, myEloRating: 1000},
            {dreamTeamId: 14, myEloRating: 1000},
            {dreamTeamId: 15, myEloRating: 1000},
            {dreamTeamId: 16, myEloRating: 1000},
        ]
    })

    console.log('created user')
    res.status(200).json(newUser)

})


module.exports = { getUser, loginUser, registerUser }