const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello from inside of application"
    ),
    React.createElement("h1", { id: "heading2" }, "I am a sibling element"),
  ])
);
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
