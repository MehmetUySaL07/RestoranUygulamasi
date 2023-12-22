import axios from "axios";
export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer qnFwlwlLIRdIgy02AOeo9uPHhEAHjn283aQkTi-zK2ORdUK2jiFMgPdVzTPwhTD2IwtKYNP7CYWefI0HcNxYrG1s2pPfhrzu-Cy0Bex09hKl4uBX8PJxPjm2cFV_ZXYx'
    }
});