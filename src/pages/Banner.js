import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Banner = () => {
    let{todo,setTodo}=useState([])
    useEffect (()=>{
       axios.get("https://jsonplaceholder.typicode.com/todos")
       .then((res)=>{
            setTimeout(()=>{
                setTodo(res.data)
            },3000)
            
        })
        .catch((err)=>{

        })
    })
    return (
        <div>
            {JSON.stringify(todo)}
        </div>
    );
};

export default Banner;