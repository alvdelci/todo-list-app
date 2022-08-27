import axios from "axios";

const API_URL = "http://localhost:3333";

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "X-Requested-With": "XMLHttpRequest",
    },
});

export default api;