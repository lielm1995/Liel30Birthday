import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.scss';
import './i18n'; // Import i18n configuration
import App from './App.jsx';
import styles from './App.module.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App className={styles.app} />
  </StrictMode>
);
