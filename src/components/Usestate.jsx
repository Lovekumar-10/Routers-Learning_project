import React from 'react'
import { useState } from 'react';



const Usestate = () => {

    let [Counter, setCounter]= useState(0)


    const increaseByone = ()=>{
        // Counter++;
        setCounter(Counter+1)
        console.log("count =",Counter);

    };
    const decreaseByone = ()=>{
        // Counter--;
        setCounter(Counter-1)
        console.log("count = ",Counter);
        
    };
  return (
    <div>
        <h1>Counter: {Counter}</h1>

        <button onClick={ increaseByone}> Add -1</button>
        <button onClick={decreaseByone}>Subtract -1</button>
    </div>
  )
}

export default Usestate