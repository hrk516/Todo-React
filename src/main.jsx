import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
// namedImportに変更

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
