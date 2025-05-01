import { useEffect, useState } from "react";

export const useOnlineVerification = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateState = () => setOnline(navigator.onLine);

    window.addEventListener('online', updateState);
    window.addEventListener('offline', updateState);

    return () => {
      window.removeEventListener('online', updateState);
      window.removeEventListener('offline', updateState);
    };
  }, [])

  return online;
}