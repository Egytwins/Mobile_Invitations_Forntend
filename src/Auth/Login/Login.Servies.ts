import axiosInstance from "../../Intercaptor/Add-Token-To-api";
import Login from "./Login.Interfaces";

export default async function LoginServies(Data: Login): Promise<any> {
  let data = await axiosInstance
    .post(`${process.env.REACT_APP_PORT}Auth/signIn`, Data)
    .then((res) => {
      localStorage.setItem("token", res.data.data.token);
    })
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
}
