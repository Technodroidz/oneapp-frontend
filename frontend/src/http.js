import axios from "axios";
export default axios.create({
    baseURL:"https://tec24.in/oneapp_backend/api",
    headers:{
        "Content-type":"multipart/form-data"
    }
})