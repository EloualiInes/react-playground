//const helloWorld = React.createElement('h1', {}, 'Hello world!');
import React from "react";
import ReactDOM from "react-dom";

const nameOne = 'Julien JOVY'
const elementOne = <h1 title={nameOne}>Bonjour</h1>

ReactDOM.render(elementOne, document.querySelector('#app'));
