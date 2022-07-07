import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [count,setCount]=useState(20)
    const value=useRef(count)
    const [timerid,settimerid]=useState(0)
    const [toogle,settoogle]=useState(false)
    const handlestop=()=>{
     clearInterval(timerid)
     console.log("stop")
    }
    useEffect(()=>{
        if(toogle){
           if(value.current==0){
            
            clearInterval(timerid)
         
           
           }
           else{
            let id=setInterval(() => {
                value.current=value.current-1;
                setCount(value.current)
            }, 1000);
            settimerid(id)
           }
            
        }
        return clearInterval(timerid)
    },[count,toogle])
    const handlestart=()=>{
    //    let id=setInterval(()=>{
    //      value.current=value.current-1;
    //      setCount(value.current)
    //    },1000)
    //    settimerid(id)
    //    
    }
    const handlereset=()=>{
         clearInterval(timerid)
         setCount(20)
         value.current=20
         settoogle(false)
    }
    const handleclick=()=>{
        settoogle(!toogle)
    }
    const handlerestart=()=>{
        value.current=20
        setCount(value.current)
        // setCount(20)
        settoogle(false)
    }
    if(toogle){
        handlestart()
    }
    else{
        handlestop()
    }
    console.log(count)
  return (
    <div>
        {
            value.current==0 ? <div><h2>Hello! Time OUT</h2>
                <button onClick={handlerestart}>Go Back</button>
            </div>:<div>
                <h2>count is :{count}s</h2>
        <button onClick={handleclick}>{toogle ?"Pause":"Start"}</button>
        <button onClick={handlereset}>Reset</button>
            </div>
        }
        
    </div>
  )
}

export default Timer