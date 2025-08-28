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
      className={isAnimationEnabled ? styles['bouncing-piggy'] : undefined}
      src={piggyBank}
      alt="piggy bank"
      width={36}
      height={36}
    />
  );
};

export default BouncingPiggyBank;
