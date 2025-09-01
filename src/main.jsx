import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './global.scss';
import './i18n'; // Import i18n configuration
import App from './App.jsx';
import styles from './App.module.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Liel30Birthday">
      <App className={styles.app} />
    </BrowserRouter>
  </StrictMode>
);
