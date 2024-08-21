const asyncHandler = require('express-async-handler')
const axios = require('axios');


const getPlayerSeasonAvgs = asyncHandler(async(req,res) => {
   
    try {
        console.log("making api call")
        const response = await axios.get(`https://api.balldontlie.io/v1/season_averages?season=${process.env.CURRENT_SEASON}`, {
            headers: {
                'Authorization': `${process.env.BALLDONTLIE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            params: req.query
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data', details: error.message });
    }

})

module.exports = { getPlayerSeasonAvgs }