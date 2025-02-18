import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';


const axiosInstance = axios.create({ 
    baseURL: `${import.meta.env.VITE_SERVER_URL}`,
    withCredentials: true
});

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()
   useEffect(()=>{
       axiosInstance.interceptors.response.use(response =>{
           return response;
       },error =>{
           console.log('error caught in interceptors,',error)
           if(error.status === 401 || error.status === 403){
               console.log('need to logout user')
               logOut()
               .then(()=>{
                   console.log('logout successful')
               })
               .catch(error =>{
                   console.log(error)
               })
               navigate('/login')
           }
           return Promise.reject(error);
       })
   },[])  
  return axiosInstance;
}

export default useAxiosSecure