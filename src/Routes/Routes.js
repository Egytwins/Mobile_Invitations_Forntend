import { createHashRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import LoginUi from "../Futures/Login/LoginUi";
import DashboardUi from "../Futures/Dashboard/DashboardUi";
import CreateInvitationUI from "../Futures/CreateInvitation/CreateInvitationUI";
import MoreSettings from "../Futures/MoreSettings/MoreSettings";
import ListOfInvitations from "../Futures/ListOfInvitations/ListOfInvitations";
import QrPageUi from "../Futures/QrPage/QrPageUi";

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
        path: "/invations",
        element: <ListOfInvitations />,
      },
      {
        path: "/more",
        element: <MoreSettings />,
      },
      {
        path: "/Qr",
        element: <QrPageUi />,
      },
    ],
  },
]);

export default routes;
