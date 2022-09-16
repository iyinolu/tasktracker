import { useState, useEffect, useCallback } from "react";
import { storageService } from "../services/storageService";

export const useLocalStorage = () => {
  const [storageValue, setStorageValue] = useState({ key: "", value: "" });

  useEffect(() => {
    storageService.setValue(storageValue.key, storageValue.value);
  }, [storageValue]);

  const setStorage = useCallback(
    () => (key: string, value: string) => {
      setStorageValue({ key: key, value: value });
    },
    []
  );

  return { setStorage };
};
