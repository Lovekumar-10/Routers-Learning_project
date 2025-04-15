import React from 'react'


const Product = (props) => {    //  props is helpfull in reusable of  code in  react
 
      
        return (
          <div>
           <h1>bio_data of avg human body</h1>
           <h2>Name : {props.name}</h2>
           <h2>age : {props.age}</h2>
           <h2>height : {props.height}</h2>
           <h2>weight : {props.weight}</h2>
          
          </div>
        ) 
}

export default Product