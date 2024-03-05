import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import QuestionProvider from "./Store/Question_provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuestionProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QuestionProvider>
  </React.StrictMode>
);
