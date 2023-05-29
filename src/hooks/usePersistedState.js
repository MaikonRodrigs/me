import { useState, useEffect } from "react";

function usePersistedState(key, initialState, delay) {
  const [state, setState] = useState(initialState);
  const [shouldSave, setShouldSave] = useState(localStorage.getItem(key));

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShouldSave(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);

  useEffect(() => {
    if (shouldSave) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.error("Error saving state to localStorage:", error);
      }
    }
  }, [key, state, shouldSave]);

  return [state, setState];
}

export default usePersistedState;
