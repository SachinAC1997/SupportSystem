import React from "react";
import ReactDOM from "react-dom/client";
import Apps from "./Apps";
import { AuthProvider } from "./Components/auth";
import './index.css';

const root = ReactDOM.createRoot( 
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <Apps />
    </AuthProvider>
  </React.StrictMode>
);