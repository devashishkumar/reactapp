const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Hello World1"), React.createElement("h2", {}, "Hello World2")])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// const hTag = React.createElement("h1", { id: "heading" }, "Hello World");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(hTag);
// console.log(hTag);