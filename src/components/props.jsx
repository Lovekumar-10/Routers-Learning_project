
// Props (short for properties) in React are read-only attributes 
// that enable data transfer from a parent to a child component.
// They enhance reusability, flexibility, and dynamic rendering while 
// promoting modularity and avoiding hardcoded values in components.
import React from 'react'


// basic eg 

// export const Basic = (props) => {
//   return (
//     <div>
//          <h1>Item</h1>
//            <h2>Name : {props.name}</h2>
//            <h2>age : {props.age}</h2>
//            <h2>height : {props.height}</h2>
//            <h2>weight : {props.weight}</h2>

//     </div>
//   )
// }




// this is good way of this 
export const Basic = ({name,age,height,weight}) => {
  return (
    <div>
         <h1>Item</h1>
           <h2>Name : {name}</h2>
           <h2>age : {age}</h2>
           <h2>height : {height}</h2>
           <h2>weight : {weight}</h2>

    </div>
  )
}
