import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "./index.css";

import { ThemeProvider } from "@mui/material/styles";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import theme from "./theme/theme";

import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <App />

        <ToastContainer
          position="top-right"
        />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);