import React from "react";
import ReactDOM from "react-dom/client";

const para = React.createElement("div" , {id : "main"} , [
    React.createElement("div" , {className : "class-1"} , [
        React.createElement("h1" , {} , "Hello"),
        React.createElement("h2" , {} , "World")
    ]),
    React.createElement("div" , {className : "class-2"} , [
        React.createElement("h1" , {} , "Hello"),
        React.createElement("h2" , {} , "World")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(para);