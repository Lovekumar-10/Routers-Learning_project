import React from 'react'

const Events = () => {
const HandledClick = () =>{
    alert("you have clicked Me :)")

};

const Addtion = (a)=>{
    alert(`${a-20}`)
};

  return (
    <>
        <h1>We are Learning Events in Reactjs</h1>

        <button onClick={HandledClick}>hello click me</button> <br />
        <button onMouseOver={HandledClick}> OnMouse over </button>



        <button onClick={()=> Addtion(100)}>Get Result</button>

    </>
  )
}

export default Events