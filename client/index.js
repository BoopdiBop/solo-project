import React from "react";
import ReactDOM from "react-dom";
import App from './components/App.js';

// webpack will see these and bundle it together
import styles from './scss/style.scss';


ReactDOM.render(<App/>, document.getElementById('root'));