import React, { useEffect } from 'react';
import { Fab as FloatingActionButton, Action } from 'react-tiny-fab';
import { BitSvg, PayboxSvg } from '../../assets/svgs/Svgs';
import BouncingPiggyBank from '../BouncingPiggyBank/BouncingPiggyBank';
import { useIsMobile } from '../../hooks/useIsMobile';
import { closeMenu, toggleMenu } from './floating-button-helper';

interface FloatingPayButtonProps {
  isAnimationEnabled: boolean;
  setIsAnimationEnabled: (enabled: boolean) => void;
}

const FloatingPayButton = ({
  isAnimationEnabled,
  setIsAnimationEnabled,
}: FloatingPayButtonProps) => {
  const isMobile = useIsMobile();
  const spaceFromEdge = isMobile ? 10 : 20;

  useEffect(() => {
    window.addEventListener('scroll', closeMenu);
    return () => {
      window.removeEventListener('scroll', closeMenu);
    };
  }, []);

  const handlePayboxOnClick = () => {
    console.log('Paybox');
  };

  const handleBitOnClick = () => {
    console.log('Bit');
  };

  const handleMainButtonClick = () => {
    setIsAnimationEnabled(false);
    localStorage.setItem('payButtonSeen', 'clicked');
    toggleMenu();
  };

  const commonActionStyles = {
    width: '60px',
    height: '60px',
  };

  return (
    <FloatingActionButton
      mainButtonStyles={{
        backgroundColor: '#f4d6de',
        width: '72px',
        height: '72px',
      }}
      style={{
        bottom: spaceFromEdge,
        right: spaceFromEdge,
        margin: 0,
      }}
      icon={<BouncingPiggyBank isAnimationEnabled={isAnimationEnabled} />}
      event="click"
      alwaysShowTitle={false}
      onClick={handleMainButtonClick}
    >
      <Action
        onClick={handlePayboxOnClick}
        aria-hidden="false"
        style={{ top: '-8px', ...commonActionStyles }}
      >
        <PayboxSvg width="100%" height="100%" />
      </Action>
      <Action
        onClick={handleBitOnClick}
        aria-hidden="false"
        style={{ top: '-14px', ...commonActionStyles }}
      >
        <BitSvg width="100%" height="100%" />
      </Action>
    </FloatingActionButton>
  );
};

export default FloatingPayButton;
