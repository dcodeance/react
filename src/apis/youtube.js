import axios from 'axios';

const KEY = 'AIzaSyAovmR8yECTrDMpBRGej_FYdNsUP60BdUQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: KEY
    }
});