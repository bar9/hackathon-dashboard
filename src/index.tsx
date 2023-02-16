import App from './App';
import './App.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Dashboard from "./components/Dashboard";
import AppState from "./services/AppState";

const appState = new AppState();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div data-theme={"emerald"}>
      <Dashboard appState={appState}></Dashboard>
    </div>
  </StrictMode>,
);
