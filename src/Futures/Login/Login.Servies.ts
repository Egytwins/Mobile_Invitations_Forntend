import { useContext } from "react";
import axiosInstance from "../../Intercaptor/Add-Token-To-api";
import Login from "./Login.Interfaces";
import { portContext } from "../../Context/PortContext";

export default async function LoginServies(Data: Login): Promise<any> {
  let data = await axiosInstance
    .post(`${process.env.REACT_APP_PORT}api/Auth/getToken`, Data)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
}
