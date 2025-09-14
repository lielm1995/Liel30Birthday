import React, { useState } from 'react';
import styles from './Home.module.scss';
import Card from '../Card/Card';
import { cards } from '../../constants/cards';
// import FloatingPayButton from '../FloatingPayButton/FloatingPayButton';
// import { useDoubleTap } from 'use-double-tap';

function Home() {
  // Initialize animation state from localStorage
  // const [isAnimationEnabled, setIsAnimationEnabled] = useState(() => {
  //   const storedValue = localStorage.getItem('payButtonSeen');
  //   return storedValue !== 'clicked'; // Animation enabled if not clicked before
  // });

  // Everyone already paid, comment this component
  // const enableAnimationOnDoubleTap = useDoubleTap((event) => {
  //   event.preventDefault();
  //   localStorage.removeItem('payButtonSeen');
  //   setIsAnimationEnabled(true);
  // });

  return (
    <div className={styles.home}>
      {/* <h1 className={styles.title} {...enableAnimationOnDoubleTap}> */}
      <h1 className={styles.title}>Liel's 30th Party</h1>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
      {/* Everyone already paid, comment this component */}
      {/* <FloatingPayButton
        isAnimationEnabled={isAnimationEnabled}
        setIsAnimationEnabled={setIsAnimationEnabled}
      /> */}
    </div>
  );
}

export default Home;
