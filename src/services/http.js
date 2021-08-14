import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost/sena-php',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default http;

/*
http.interceptors.request.use(  async (config)=>{
    config.baseURL
 }, error =>{ 
     const typerErrors = ['400','401','402','403','404','405'].includes(error.response.status)
     typerErrors && alert(error.response ? error.response.data : error.message)
 })

 http.interceptors.response.use( async (config)=>{
    config.baseURL
 }, error =>Promise.reject(console.error()))*/