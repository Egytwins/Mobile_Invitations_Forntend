import { createContext } from "react";

export  let portContext = createContext("http://egydns.ddns.net:44302/api/")
export function PortContext(props) {
    return <portContext.Provider value={{port:"http://egydns.ddns.net:44302/api/"}}>
        {props.children}
    </portContext.Provider>
}