import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { PortContext } from "./Context/PortContext";

function App() {
  return <PortContext>
    <RouterProvider router={routes} />
  </PortContext>;
}

export default App;
