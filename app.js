{/* <div id="parent">
    <div id="child1">
        <h1>Header1</h1>
        <h2>Header2</h2>
    </div>
    <div id="child2">
        <h1>Header1</h1>
        <h2>Header2</h2>
    </div>
</div> */}



const para = React.createElement(
    "div", {id: "parent"},
    [
        React.createElement( "div",{id: "child1"},
            [
                React.createElement("h1",{},"This is h1 tag"),
                React.createElement("h2",{},"This is h2 tag")
            ]
        ),

        React.createElement( "div",{id: "child2"},
            [
                React.createElement("h1",{},"This is h1 tag"),
                React.createElement("h2",{},"This is h2 tag")
            ]
        ),
    ]
)



// const heading = React.createElement(
//     "h1",
//     {id: "header"},
//     "Hello world"
// );

// console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(para);