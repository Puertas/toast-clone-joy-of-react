import { useEffect } from 'react';

function useEscapeKey(callback) {
  useEffect(() => {
    function handleKeypress(event) {
      if (event.code === 'Escape') {
        callback(event);
      }
    }
    window.addEventListener('keydown', handleKeypress);

    return () => {
      window.removeEventListener('keydown', handleKeypress);
    };
  }, [callback]);
}

export default useEscapeKey;
