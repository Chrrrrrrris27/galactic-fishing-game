import { useEffect, useState } from "react";

export const EnumStorageTypes = {
  session: "session" as storageTypes,
  local: "local" as storageTypes
};

type storageTypes = "session" | "local";

export const useStorage = (type: storageTypes) => {
  const getStorageType = () =>
    type === EnumStorageTypes.session ? sessionStorage : localStorage;

  const [storageType, setStorageType] = useState<Storage>(getStorageType());

  const getStorageItem = (key: string) => {
    if (storageType) {
      const value = storageType.getItem(key);
      return !!value && value !== "undefined" ? JSON.parse(value) : null;
    }
    return null;
  };

  const setStorageItem = (key: string, value: any) => {
    if (storageType) {
      storageType.setItem(key, JSON.stringify(value));
    }
  };

  useEffect(() => {
    setStorageType(getStorageType());
  }, [type]);

  return { getStorageItem, setStorageItem };
};
