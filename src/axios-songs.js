import axios from 'axios';

const instance = axios.create({
    // firebase endpoint for POSTing data
    baseURL: 'https://gport-a7f90.firebaseio.com/';
});

export default instance;