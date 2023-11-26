import { createHashRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import LoginUi from "../Futures/Login/LoginUi";

let routes = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LoginUi />,
      },
    ],
  },
]);

export default routes;
