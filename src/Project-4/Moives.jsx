import { useState } from "react"
import React from 'react'
import { movies } from "./Data.js"

const Moives = () => {
    const [MoviesList, setMoviesList] = useState(movies);


    const filterByCategory = (cat)=>{
        setMoviesList(movies.filter((data)=>data.category == cat))   
    }

  return (
    <>
    <div className="my-3 text-center" style={{width: '1000px', margin: 'auto'}}>
        <button onClick={()=>setMoviesList(movies)} type="button" className="btn btn-outline-primary mx-3 ">All</button>
        <button onClick={()=>filterByCategory("Action")} type="button" className="btn btn-outline-secondary mx-3 ">Action</button>
        <button onClick={()=>filterByCategory("Thriller")} type="button" className="btn btn-outline-success mx-3 ">Thriller</button>
        <button onClick={()=>filterByCategory("Animation")} type="button" className="btn btn-outline-danger mx-3 ">Animation</button>
        <button onClick={()=>filterByCategory("Horror")} type="button" className="btn btn-outline-warning mx-3 ">Horror</button>
        <button onClick={()=>filterByCategory("Drama")} type="button" className="btn btn-outline-info mx-3 ">Drama</button>
        <button onClick={()=>filterByCategory("Sci-Fi")} type="button" className="btn btn-outline-light mx-3 ">Sci-fi</button>
    </div>
    <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            width: "1300px",
            margin: "auto"
          
          
    }}>
        {MoviesList.map((data)=>(
            <div key={data.id} style={{maxHeight: "400px", maxWidth: "300px", textAlign: "center"}}>
                 <div style={{padding: '0px'}} className="HoverEffect">
                    <img src={data.poster_path} alt="" style={{width: '200px', height: '280px', borderRadius: '10px', border: "2px solid yellow"}}/>
                </div>
                <h3>{data.title}</h3>
                <p>{data.release_date}</p>
            </div>
        ))}
    </div>
    </>
  )
}

export default Moives