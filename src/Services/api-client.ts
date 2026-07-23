import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'b55a44dd9d3b42998b8b9dea94fe63b4'
    }
})