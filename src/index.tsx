import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { MyFirstComponent } from "./components/myfirstcomponent/MyFirstComponent";
import Alert from "./components/alert/Alert";

axios.defaults.baseURL = "http://localhost:4000";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyFirstComponent message="Hello World" />
    <div>
      <Alert variant="success" dismissible={false}>
        This is a success alert!
      </Alert>
      <Alert variant="danger" dismissible={true}>
        This is a dismissible danger alert!
      </Alert>
      <Alert variant="warning" dismissible={false}>
        This is a warning alert!
      </Alert>
    </div>

    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
