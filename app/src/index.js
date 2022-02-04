// Import Libraries:
import { runHookApp } from '@forrestjs/hooks';

// Import Services:
import reactRoot from '@forrestjs/react-root';
import reactRouter from "@forrestjs/react-router";
import reactMUI from '@forrestjs/react-mui';
import { OneFront } from "./one-front";


//Import feactures:
import { customRoot } from './one-front/custom-root';
import { login } from "./features/login";
import { muiTheme } from "./one-front/mui-theme";

// Run the ForrestJS App:
runHookApp({
  trace: 'compact',
  services: [reactRoot, reactRouter, reactMUI, OneFront],
  features: [muiTheme],
}).catch((err) => console.error(`Boot: ${err.message}`));


/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 */