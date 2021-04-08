const BASE_API_URL = "https://api.github.com/";

import axios from "axios";

const axiosIntance = axios.create({
    baseURL: BASE_API_URL
});

axiosIntance.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        return error.response || error;
    });

export default axiosIntance;