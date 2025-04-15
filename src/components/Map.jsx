import React from 'react'

const Map = () => {
    const Array = [
        { id: 1, name: 'Love', age: 21 },
        { id: 2, name: 'Rahul', age: 27 },
        { id: 3, name: 'Yogesh', age: 24 },
        { id: 4, name: 'monty', age: 20 },
    ];

  return (
    <div>
        <h1>We are learning Map function in React</h1>
        {Array.map((data)=><div key={data.id}> 
            <h2>Id: {data.id}</h2>
            <h2>Name: {data.name}</h2>
            <h2>Age: {data.age}</h2>
        </div>)}
    </div>
  )
}

export default Map