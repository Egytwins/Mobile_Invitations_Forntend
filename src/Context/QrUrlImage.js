import { createContext, useState, useContext } from "react";

export const QrImageContext = createContext();

export function QrImageProvider({ children }) {
  const [qrImageUrl, setQrImageUrl] = useState("defaultImageUrl");

  const updateQrImageUrl = (newImageUrl) => {
    setQrImageUrl(newImageUrl);
  };

  const contextValue = {
    qrImageUrl,
    updateQrImageUrl,
  };

  return (
    <QrImageContext.Provider value={contextValue}>
      {children}
    </QrImageContext.Provider>
  );
}

// Custom hook to easily access the context values
export function useQrImage() {
  return useContext(QrImageContext);
}
