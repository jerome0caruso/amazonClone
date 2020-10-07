import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://us-central1-clone-20d86.cloudfunctions.net/api' //The API cloud function URL
})

export default instance;


