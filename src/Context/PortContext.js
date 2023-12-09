import { createContext } from "react";

export let qrImage = createContext("http://egydns.ddns.net:44302/api/");
export function qrImageProvider(props) {
  return (
    <qrImage.Provider value={{ qrImage: "http://egydns.ddns.net:44302/api/" }}>
      {props.children}
    </qrImage.Provider>
  );
}
