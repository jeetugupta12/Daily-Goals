import React from 'react';
import { useState } from 'react';
import "./Jokegenerator.css";


const Jokegenerator = ()=>{
    const[jokes,setjokes]=useState("")
    const[isloading,setIsloading]=useState(true)
    const fetchJokes=async()=>{
        const res=await fetch("https://icanhazdadjoke.com/")
        const data=await res.json()
        setjokes(data)
    }
    
    return(
    <>
    <div className="jokeapp">
        <h1>
            Random Joke Generator😂😂
        
        </h1>
        <p>jhghkljlkbj,hvhkjkk

        </p>
        <button> Generate Random Joke</button>
    </div>
    </>
    )
}

export default Jokegenerator;