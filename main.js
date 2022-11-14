// const helloWorld = React.createElement('h1', {}, 'Hello world!');
// mauvaise pratique

//ReactDOM.render(helloWorld, document.body);
const elt = <h1>Hello world</h1>;
ReactDOM.render(
    elt,
    document.getElementById('app')
  );
