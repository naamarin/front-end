const axios = require('axios');

export const http = axios.create({
    baseURL: 'http://localhost:8081'
});