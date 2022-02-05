import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Client } from "ketting";
import { KettingProvider } from "react-ketting";

// Create a new client, and set the base uri for the API.
// This URI will be used to resolve any relative uris.
const client = new Client("http://localhost:8500");

ReactDOM.render(
  <KettingProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </KettingProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
