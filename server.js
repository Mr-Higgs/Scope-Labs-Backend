const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3036;
const API_BASE_URL = 'https://take-home-assessment-423502.uc.r.appspot.com/api';

app.use(bodyParser.json());
app.use(cors());

//Get videos by user_id   
app.get('/api/videos', async (req, res) => {
//add try-catch error handling
});

//Create a new video
app.post('/api/videos', async (req, res) => {
//add try-catch error handling
});

//Upadate video
app.put('/api/videos', async (req, res) => {
//add try-catch error handling
});

//Get single video by video_id
app.get('/api/videos/single', (req, res) => {
//add try-catch error handling
});

//Get comments for video
app.get('/api/videos/comments', (req, res) => {
//add try-catch error handling
});

//create a new comment for video
app.post('/api/videos/comments', (req, res) => {
//add try-catch error handling
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});