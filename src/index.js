import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";

// ReactDOM.createRoot(
//   <React.StrictMode>
//       <BrowserRouter>
//           <App />
//       </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
);

