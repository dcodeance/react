import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8647ec6a79807488a62c8ace431456481f2dcfd3c64258def2c7b4dfbd9ca194'
    } 
});