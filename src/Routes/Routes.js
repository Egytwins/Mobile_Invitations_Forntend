import { createHashRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import LoginUi from "../Futures/Login/LoginUi";
import DashboardUi from "../Futures/Dashboard/DashboardUi";
import CreateInvitationUI from "../Futures/CreateInvitation/CreateInvitationUI";
import MoreSettings from "../Futures/MoreSettings/MoreSettings";

let routes = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LoginUi />,
      },
      {
        path: "/dashboard",
        element: <DashboardUi />,
      },
      {
        path: "/CreateInvitation",
        element: <CreateInvitationUI />,
      },
      {
        path: "/more",
        element: <MoreSettings />,
      },
    ],
  },
]);

export default routes;
