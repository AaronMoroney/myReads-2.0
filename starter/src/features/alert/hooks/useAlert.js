import { useCallback, useMemo, useState } from 'react'

export function useAlert() {
  const [isVisible, setIsVisible] = useState('');

  const showAlert = useCallback(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
        setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return useMemo (
    () => ({
        showAlert, 
        isVisible
    }), 
    [ showAlert, isVisible]
  ) 
}