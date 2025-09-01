import React from 'react';
import piggyBank from '../../assets/piggybank.png';
import styles from './BouncingPiggyBank.module.scss';

const BouncingPiggyBank = ({
  isAnimationEnabled,
}: {
  isAnimationEnabled: boolean;
}) => {
  return (
    <img
      className={isAnimationEnabled ? styles.bouncingPiggy : ''}
      src={piggyBank}
      alt="piggy bank"
      width={48}
      height={48}
    />
  );
};

export default BouncingPiggyBank;
