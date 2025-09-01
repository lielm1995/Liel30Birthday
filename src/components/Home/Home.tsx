import React from 'react';
import styles from './Home.module.scss';
import Card from '../Card/Card';
import { cards } from '../../constants/cards';
import FloatingPayButton from '../FloatingPayButton/FloatingPayButton';

function Home() {
  return (
    <div className={styles.home}>
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

export default Home;
