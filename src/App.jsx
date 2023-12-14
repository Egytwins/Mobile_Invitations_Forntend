import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { QrImageProvider } from "./Context/QrUrlImage";

function App() {
  window.addEventListener("unhandledrejection", (e) => {});
  return (
    <QrImageProvider>
      <RouterProvider router={routes} />
    </QrImageProvider>
  );
}

export default App;
