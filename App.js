// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello React First lesson"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//  what if we wanted to create nested div inside div with id child in react?
// <div id="parent">
// <div id="child">
// <h1>I am an h1 tag</h1>
// </div>
// </div>

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am an h1 tag"),
    React.createElement("h2", {}, "i am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am an h1 tag"),
    React.createElement("h2", {}, "i am an h2 tag"),
  ]),
]);
console.log(parent);
// ReactElement(object) = HTML(Browser Unterstands)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
