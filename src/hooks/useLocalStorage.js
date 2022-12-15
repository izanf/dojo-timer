import { useEffect, useState } from "react";

function useLocalStorage(key, initialState) {
  const [state, setState] = useState(() => {
    try {
      const storedState = localStorage.getItem(`dojo-timer.${key}`);
      if (!storedState) {
        return initialState;
      }
      return JSON.parse(storedState);
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(`dojo-timer.${key}`, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;
