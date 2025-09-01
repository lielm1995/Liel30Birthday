import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './global.scss';
import styles from './App.module.scss';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/pay" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Navigate to="/pay" replace />} />
      </Routes>
    </div>
  );
}

export default App;
