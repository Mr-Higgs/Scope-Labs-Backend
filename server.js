const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const PORT = 5000;
const EXT_API_BASE_URL = 'https://take-home-assessment-423502.uc.r.appspot.com/api';

app.use(bodyParser.json());
app.use(cors());

// Proxy to get videos by user_id   
app.get('/api/videos', async (req, res) => {
    const {user_id} = req.query;    
    //add try-catch error handling
    try{
        const response = await axios.get(`${EXT_API_BASE_URL}/videos`, {params: {user_id}});
        //Handle the response here
        res.json(response.data);
    } catch (error) {
        //Handle the error here
        res.status(422).json({ error: 'Error fetching videos' });
    }
});

//proxy to create a new video
app.post('/api/videos', async (req, res) => {
    //add try-catch error handling
    try{} catch (error) {}
});

//Proxy to update video
app.put('/api/videos', async (req, res) => {
    //add try-catch error handling
    try{} catch (error) {}
});

//proxy to get single video by video_id
app.get('/api/videos/single', (req, res) => {
    //add try-catch error handling
    try{} catch (error) {}
});

//proxy to get comments for video
app.get('/api/videos/comments', (req, res) => {
    //add try-catch error handling
    try{} catch (error) {}
});

//proxy to create a new comment for video
app.post('/api/videos/comments', (req, res) => {
    //add try-catch error handling
    try{} catch (error) {}
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});