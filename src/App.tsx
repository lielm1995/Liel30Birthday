import React from 'react';
import styles from './App.module.scss';
import Card from './components/Card/Card';
import { cards } from './constants/cards';
import FloatingPayButton from './components/FloatingPayButton/FloatingPayButton';

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Liel's 30th Party</h1>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
      <FloatingPayButton />
    </div>
  );
}

export default App;
