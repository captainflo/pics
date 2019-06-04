import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
    Authorization: 'Client-ID c288eecb29d4ce2333d1920a74dc2f4d5551c261b21e4b8366f001a7c6911499'
    },
});