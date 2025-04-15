import React, {useEffect, useState}from "react"

const Effect = () => {

  // useEffect , useState created here
  const [Counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("useEffect is running on webpage ")
    document.title = Counter
   
  }, [Counter])
  
  return(
   <>
   <h1>hello  we are learning useEffect </h1>
   <div>
    <h2>{Counter}</h2>

    <button onClick={()=>setCounter(Counter+1)}>Increase</button>
    <button onClick={()=>setCounter(Counter-1)}>Decrease</button>
   </div>
   </> 
  )
}

export default Effect

