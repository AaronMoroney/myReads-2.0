import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from 'react-router-dom'
import "./css/index.css"
import { App } from './app';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
