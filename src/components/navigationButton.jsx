import React, { useEffect } from 'react';

const NavigationControls = () => {
  const [canGoBack, setCanGoBack] = React.useState(false);
  const [canGoForward, setCanGoForward] = React.useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCanGoBack(window.history.length > 1);
      setCanGoForward(window.history.length > 2);
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState();

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const goBack = () => {
    if (canGoBack) {
      window.history.back();
    }
  };

  const goForward = () => {
    if (canGoForward) {
      window.history.forward();
    }
  };

  return (
    <div className="flex justify-between">
      <button onClick={goBack} disabled={!canGoBack}>
        {'Atrás'}
      </button>
      <button onClick={goForward} disabled={!canGoForward}>
        {'Adelante'}
      </button>
    </div>
  );
};

export default NavigationControls;