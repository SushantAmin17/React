import React from "react";
import ReactDOM from "react-dom/client";
 

// JSX 

const header = (
    <div>
        <h1>Hello</h1>
    </div>
);

// React Component Functional Component 

const HeaderComponent = () => {
    return (
        <div>
            <h1>hello</h1>
            <h2>Hello</h2>
            {header}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(HeaderComponent());