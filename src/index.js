import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";

// Importa los servicios necesarios para inicialización global
import { AuthProvider } from './context/AuthContext'; // Opcional si usas Context API
import './services/axiosConfig'; // Si usas Axios para llamadas API

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* Si implementas Context API para autenticación */}
    {/* <AuthProvider> */}
      <App />
    {/* </AuthProvider> */}
  </StrictMode>
);
