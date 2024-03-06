{/* <div id="main">
    <div className="class-1">
        <h1>Hello</h1>
        <h2>World</h2>
    </div>
    <div className="class-2">
        <h1>Hello</h1>
        <h2>World</h2>
    </div>
</div> */}

// const header = React.createElement("h1" , {} , "Hello World");

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