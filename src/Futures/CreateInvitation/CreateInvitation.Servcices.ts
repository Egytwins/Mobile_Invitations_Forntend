import axiosInstance from "../../Intercaptor/Add-Token-To-api";
import { CreateInvitation } from "./CreateInvitation.Interface";

export default async function CreateInvations(
  Data: CreateInvitation
): Promise<any> {
  try {
    let data = await axiosInstance
      .post(`${process.env.REACT_APP_PORT}Registrations/create`, Data)
      .then((res) => {
        return res.data;
      });

    return data.data; // Add this line to return the data
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
}
