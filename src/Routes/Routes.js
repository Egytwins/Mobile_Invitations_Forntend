import { createHashRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import LoginUi from "../Futures/Login/LoginUi";
import DashboardUi from "../Futures/Dashboard/DashboardUi";
import CreateInvitationUI from "../Futures/CreateInvitation/CreateInvitationUI";
import MoreSettings from "../Futures/MoreSettings/MoreSettings";
import ListOfInvitations from "../Futures/ListOfInvitations/ListOfInvitations";
import QrPageUi from "../Futures/QrPage/QrPageUi";
import CheckToken from "../Auth/CheckToken/CheckToken";

let routes = createHashRouter([
  { path: "/", element: <LoginUi /> },
  {
    path: "/app",
    element: <MainLayout />,
    children: [
      // {
      //   index: true,
      //   element: <LoginUi />,
      // },
      {
        path: "dashboard",
        element: (
          <CheckToken>
            <DashboardUi />
          </CheckToken>
        ),
      },
      {
        path: "CreateInvitation",
        element: (
          <CheckToken>
            <CreateInvitationUI />
          </CheckToken>
        ),
      },
      {
        path: "invations",
        element: (
          <CheckToken>
            <ListOfInvitations />
          </CheckToken>
        ),
      },
      {
        path: "more",
        element: (
          <CheckToken>
            <MoreSettings />
          </CheckToken>
        ),
      },
      {
        path: "Qr",
        element: (
          <CheckToken>
            <QrPageUi />
          </CheckToken>
        ),
      },
    ],
  },
]);

export default routes;
