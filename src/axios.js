import axios from "axios";
const instance = axios.create({
    baseURL: 'https://pretva--backend.herokuapp.com/'   
})
export default instance;