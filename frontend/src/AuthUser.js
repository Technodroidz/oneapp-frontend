import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AuthUser(){
    
    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.stringify(tokenString);
        return tokenString;
    }

    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const user_details = JSON.stringify(userString);
        return user_details;
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken = (user,token) => {
        sessionStorage.setItem('token',JSON.stringify(token));
        sessionStorage.setItem('user',JSON.stringify(user));

        setToken(token);
        setUser(user);
        alert('Login Successfull!')
        navigate('/');
    }

    const http = axios.create({
        baseURL:"http://localhost:8000/api",
        headers:{
           "Content-type":"application/json"
        }
    });

    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http
    }
}
