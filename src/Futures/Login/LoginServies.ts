
import { useContext } from "react";
import axiosInstance from "../../Intercaptor/Add-Token-To-api";
import Login from "./LoginContext";
import { portContext } from "../../Context/PortContext";


export default async function LoginServies(Data: Login): Promise<any> {
    let  port  = useContext(portContext)
    console.log(port);
    let data = await axiosInstance
    .post(`${port}api/Auth/getToken`, Data)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
  console.log(res);
  
    })
    .catch((error) => {
console.log(error);

        
    });
}
