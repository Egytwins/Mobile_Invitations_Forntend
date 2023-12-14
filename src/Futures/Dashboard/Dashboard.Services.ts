import axiosInstance from "../../Intercaptor/Add-Token-To-api";

export const GetInvationsInfo = async () => {
  try {
    const res = await axiosInstance.get(
      `${process.env.REACT_APP_PORT}Registrations/get-count`
    );
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
export const GetLastFiveItems = async () => {
  try {
    const res = await axiosInstance.get(
      `${process.env.REACT_APP_PORT}Registrations/get-pagination?PageNumber=1&PageSize=5`
    );
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
