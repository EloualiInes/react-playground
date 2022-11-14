// const helloWorld = React.createElement('h1', {}, 'Hello world!');
// mauvaise pratique

console.log("hihi");
//ReactDOM.render(helloWorld, document.body);
const elt = <h1>Hello world</h1>;
console.log(elt);
ReactDOM.render(
    elt,
    document.getElementById('app')
  );
