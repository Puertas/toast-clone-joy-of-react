import { useEffect } from 'react';

function useKeydownKey(keyCode, callback) {
  useEffect(() => {
    function handleKeypress(event) {
      if (event.code === keyCode) {
        callback(event);
      }
    }
    window.addEventListener('keydown', handleKeypress);

    return () => {
      window.removeEventListener('keydown', handleKeypress);
    };
  }, [keyCode, callback]);
}

export default useKeydownKey;
