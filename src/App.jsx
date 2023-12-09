import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { qrImageProvider } from "./Context/PortContext";

function App() {
  return (
    <qrImageProvider>
      <RouterProvider router={routes} />
    </qrImageProvider>
  );
}

export default App;
