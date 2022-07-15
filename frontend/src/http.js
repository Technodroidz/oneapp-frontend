import axios from "axios";
export default axios.create({
    baseURL:"http://younggeeks.co.in/oneapp_backend/api",
    headers:{
        "Content-type":"multipart/form-data"
    }
})