import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';


/*
The following line of code allows you to print to the screen:
'Our React App Using a Component'
from the ./components/app file. It's looking for the class App
and then printing to the screen the contents within the class.
*/
ReactDOM.render(<App />, document.getElementById('root'))

/*
This block of code allows you to print a header to the localhost
labled 'Our React App' from this js file and not the app.jsx 
component file.

const jsxElement = <h1>Our React App</h1>;
console.log(jsxElement);

ReactDOM.render(jsxElement, document.getElementById('root'));
*/