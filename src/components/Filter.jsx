import React from 'react'

const Filter = () => {
    //create an object
    const Obj = [
        { id: 1, name: "John" , age: 34},
        { id: 2, name: "Jane" , age: 44},
        { id: 3, name: "Bob" , age: 33},
        { id: 4, name: "paula" , age: 33},
        { id: 5, name: "mariya" , age: 33},
    ];

    // filtering data by  age 
    const filteredData = Obj.filter(item => item.age === 33);
    console.log(filteredData)
  return (
    <>
    <h2>Hello we are Learning Filter array method </h2>
    {filteredData.map((data)=><div key={data.id}> 
            <h2>Id: {data.id}</h2>
            <h2>Name: {data.name}</h2>
            <h2>Age: {data.age}</h2>
        </div>)}
    </>
  )
}

export default Filter
