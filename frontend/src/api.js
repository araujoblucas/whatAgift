import axios from 'axios';



const api = axios.create({
    baseURL: 'http://localhost:8000',
    crossdomain: true 
    
});

export default api;


