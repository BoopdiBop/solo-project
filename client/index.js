import React from "react";
import App from './components/App.js';

// webpack will see these and bundle it together
import styles from './scss/style.scss';

import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root'));
root.render(<App />)