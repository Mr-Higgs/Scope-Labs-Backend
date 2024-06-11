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

});

//Create a new video
app.post('/api/videos', async (req, res) => {

});

//Upadate video
app.put('/api/videos', async (req, res) => {

});

//Get single video by video_id
app.get('/api/videos/single', (req, res) => {

});

//Get comments for video
app.get('/api/videos/comments', (req, res) => {

});

//create a new comment for video
app.post('/api/videos/comments', (req, res) => {

});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});