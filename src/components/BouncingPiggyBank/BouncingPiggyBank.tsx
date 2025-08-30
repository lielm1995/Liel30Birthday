import React from 'react';
import piggyBank from '../../assets/piggybank.png';
import styles from './BouncingPiggyBank.module.scss';
// import { usePaymentTour } from '../../hooks/usePaymentTour';

const BouncingPiggyBank = ({
  isAnimationEnabled,
}: {
  isAnimationEnabled: boolean;
}) => {
  // const { onDestroy } = usePaymentTour({ shouldShow: isAnimationEnabled });
  return (
    <img
      // className={`floating-pay-button ${
      //   isAnimationEnabled ? styles.bouncingPiggy : ''
      // }`}
      className={isAnimationEnabled ? styles.bouncingPiggy : ''}
      src={piggyBank}
      alt="piggy bank"
      width={48}
      height={48}
      // onClick={onDestroy}
    />
  );
};

export default BouncingPiggyBank;
