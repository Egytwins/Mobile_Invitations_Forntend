import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { QrImageProvider } from "./Context/QrUrlImage";
import PwaGlobalInstall from "./Futures/Pwa_Install/PwaGloabalInstall";

function App() {
  let [isPwaInstalled, setIsPwaInstalled] = React.useState(false);
  let [PLATFORM, setPLATFORM] = React.useState("unknown");

  React.useEffect(() => {
    let { INSTALLED, PLATFORM } = CheckIfPwaAppInstalled();
    setIsPwaInstalled(INSTALLED);
    setPLATFORM(PLATFORM);
  }, []);

  function CheckIfPwaAppInstalled() {
    const UA = navigator.userAgent;
    const IOS = UA.match(/iPhone|iPad|iPod/);
    const ANDROID = UA.match(/Android/);

    const PLATFORM = IOS ? "ios" : ANDROID ? "android" : "unknown";

    const standalone = window.matchMedia("(display-mode: standalone)").matches;

    const INSTALLED = !!(standalone || (IOS && !UA.match(/Safari/)));
    console.log(INSTALLED, PLATFORM);
    return { INSTALLED, PLATFORM };
  }

  return (
    <React.Fragment>
      {isPwaInstalled ? (
        <QrImageProvider>
          <RouterProvider router={routes} />
        </QrImageProvider>
      ) : (
        <PwaGlobalInstall
          platform={PLATFORM}
          setIsPwaInstalled={setIsPwaInstalled}
        />
      )}
    </React.Fragment>
  );
}

export default App;
