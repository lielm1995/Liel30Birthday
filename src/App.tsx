import React from 'react';
import './global.scss';
import styles from './App.module.scss';
import Home from './components/Home/Home';

function App() {
  return (
    <div className={styles.app}>
      <Home />
    </div>
  );
}

export default App;
