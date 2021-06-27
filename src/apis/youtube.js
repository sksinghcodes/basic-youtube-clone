import axios from 'axios'; 

const KEY = "AIzaSyDVoO_Vggsq1U4ST77sCkdc5GE2N68-mvo";


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});