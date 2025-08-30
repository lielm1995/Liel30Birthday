import { useEffect, useRef } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const usePaymentTour = ({ shouldShow }: { shouldShow: boolean }) => {
  const driverRef = useRef<ReturnType<typeof driver> | null>(null);

  const onDestroy = () => {
    enableBodyScroll(document.body);
    if (driverRef.current) {
      driverRef.current.destroy();
    }
  };

  useEffect(() => {
    // Initialize the driver
    driverRef.current = driver({
      showProgress: false,
      showButtons: ['close'],
      stagePadding: 20,
      overlayColor: 'black',
      overlayOpacity: 0.8,
      stageRadius: 100,
      steps: [
        {
          element: '.floating-pay-button',
          popover: {
            title: 'Pay here',
            side: 'right',
            align: 'center',
            doneBtnText: 'Cool thanks!',
          },
        },
      ],
      onDestroyStarted: onDestroy,
    });

    // Start the tour automatically after a short delay
    const timer = setTimeout(() => {
      if (driverRef.current && shouldShow) {
        disableBodyScroll(document.body);
        driverRef.current.drive();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      onDestroy();
    };
  }, [shouldShow]);

  return { onDestroy };
};
