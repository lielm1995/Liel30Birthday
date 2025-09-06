import React, { useState } from 'react';
import styles from './Home.module.scss';
import Card from '../Card/Card';
import { cards } from '../../constants/cards';
import FloatingPayButton from '../FloatingPayButton/FloatingPayButton';
import { useDoubleTap } from 'use-double-tap';

function Home() {
  // Initialize animation state from localStorage
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(() => {
    const storedValue = localStorage.getItem('payButtonSeen');
    return storedValue !== 'clicked'; // Animation enabled if not clicked before
  });

  const enableAnimationOnDoubleTap = useDoubleTap((event) => {
    event.preventDefault();
    event.stopPropagation();
    localStorage.removeItem('payButtonSeen');
    setIsAnimationEnabled(true);
  });

  return (
    <div className={styles.home}>
      <h1 className={styles.title} {...enableAnimationOnDoubleTap}>
        Liel's 30th Party
      </h1>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
      <FloatingPayButton
        isAnimationEnabled={isAnimationEnabled}
        setIsAnimationEnabled={setIsAnimationEnabled}
      />
    </div>
  );
}

export default Home;
