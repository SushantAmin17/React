import React from "react";
import ReactDOM from "react-dom/client";



const heading = <h1>This is JSX Code</h1>



// const heading = React.createElement(
//     "h1",
//     {id: "header"},
//     "Hello world"
// );

// console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);