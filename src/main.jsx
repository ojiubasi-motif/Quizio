import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "rsuite/dist/rsuite.min.css"; // or 'rsuite/styles/index.less';
import "./index.css";
import "./assets/styles/miscStyles.css"
import { CustomProvider } from "rsuite";
import { BrowserRouter } from "react-router-dom";
import { QuizContextProvider } from "./contexts/QuizContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider>
      <BrowserRouter>
        <QuizContextProvider>
          <App />
        </QuizContextProvider>
      </BrowserRouter>
    </CustomProvider>
  </React.StrictMode>
);
