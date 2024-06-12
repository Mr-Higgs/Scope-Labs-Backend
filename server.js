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
    //Destructure the query parameters
    const {user_id} = req.query;    
    //add try-catch error handling
    try{
        //Sends GET request to external API with query parameter user_id using axios and awaits the response in the response variable
        const response = await axios.get(`${EXT_API_BASE_URL}/videos`, {params: {user_id}});
        //Sends the response from the external API to the client
        res.json(response.data);
    } catch (error) {
        //Sends an error response to the client
        res.status(422).json({ error: 'Error fetching videos' });
    }
});

//proxy to create a new video
app.post('/api/videos', async (req, res) => {
    //add try-catch error handling
    try{
        //Sends POST request to external API using axios and awaits the response in the response variable
        const response = await axios.post(`${EXT_API_BASE_URL}/videos`, req.body);
        //Sends the response from the external API to the client
        res.status(200).json(response.data);
    } catch (error) {
        //Sends an error response to the client
        res.status(422).json({ error: 'Error creating video' });
    }
});

//Proxy to update video
app.put('/api/videos', async (req, res) => {
    //add try-catch error handling
    try{
        //Sends PUT request to external API using axios and awaits the response in the response variable
        const response = await axios.put(`${EXT_API_BASE_URL}/videos`, req.body);
        //Sends the response from the external API to the client
        res.status(200).json(response.data);
    } catch (error) {
        //Sends an error response to the client
        res.status(422).json({ error: 'Error updating video' });    
    }
});

//proxy to get single video by video_id
app.get('/api/videos/single', async (req, res) => {
    //Desdtructure the query parameters for video_id
    const {video_id} = req.query;
    //add try-catch error handling
    try{
        //Sends GET request to external API with query parameter video_id
        const response = await axios.get(`${EXT_API_BASE_URL}/videos/single`, {params: {video_id}});
        //Sends the response from the external API to the client
        res.json(response.data);
    } catch (error) {
        //Sends an error response to the client
        res.status(422).json({ error: 'Error fetching video' });
    }
});

//proxy to get comments for video
app.get('/api/videos/comments', async (req, res) => {
    //Destructure the query parameters for video_id
    const {video_id} = req.query;
    //add try-catch error handling
    try{
        //Sends GET request to external API with query parameter video_id
        const response = await axios.get(`${EXT_API_BASE_URL}/videos/comments`, {params: {video_id}});
        //Sends the response from the external API to the client
        res.json(response.data);
    } catch (error) {
        //Sends an error response to the client
        res.status(422).json({ error: 'Error fetching comments' });
    }
});

//proxy to create a new comment for video
app.post('/api/videos/comments', async (req, res) => {
    //add try-catch error handling
    try{
        //Sends POST request to external API using axios and awaits the response in the response variable
        const response = await axios.post(`${EXT_API_BASE_URL}/videos/comments`, req.body);
        //Sends the response from the external API to the client
        res.json(response.data);
    } catch (error) {
        //Sends an error response to the client
        res.status(422).json({ error: 'Error creating comment' });
    }
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});