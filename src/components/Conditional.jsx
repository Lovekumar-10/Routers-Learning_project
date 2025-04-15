import React from 'react';


// with if-else statement

// // Greeting component that takes 'isLoggedIn' as a prop
// const Greeting = (props) => {
//     // If user is logged in, show welcome message
//     if (props.isLoggedIn) {
//       return <h2>Welcome, User!</h2>;
//     } else {
//       // If user is not logged in, prompt to log in
//       return <h2>Please log in.</h2>;
//     }
// };

// // Conditional component that passes the 'isLoggedIn' prop to Greeting
// const Conditional = () => {
//     return <Greeting isLoggedIn={true} />; // Change to false to see "Please log in."
// };

// export default Conditional; // Exporting the component for use in other parts of the app




// with Ternary same questions

const Usertatus = (props)=>{
    return(
        <>
      {props.isLoggedIn ? <button>Logout</button> : <button>Login</button>}
        </>

    )
    
}
const conditional = ()=>{
    return(
        <Usertatus isLoggedIn={true} />
    )

}

export default conditional;