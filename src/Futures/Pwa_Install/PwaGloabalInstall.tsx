import React from "react";
import InstallBtn from "./InstallBtn";

type PlatformType = "android" | "ios";

interface PwaGlobalInstallProps {
  platform: PlatformType;
}

const PwaGlobalInstall: React.FC<PwaGlobalInstallProps> = ({ platform }) => {
  //   if (platform === "android") {
  //     return <div>Install PWA using the box install method</div>;
  //   } else if (platform === "ios") {
  //     return <div>Install PWA manually on iOS</div>;
  //   } else {
  //     return <div>Unsupported platform</div>;
  //   }
  return (
    <div
      id="Modal"
      className="modal d-flex flex-column align-items-center justify-content-center position-fixed bg-white p-5"
    >
      {platform === "ios" ? (
        <div className="card p-3 bg-secondary-subtle shadow">
          <h3 className="p-4 text-center">Ios App</h3>
          <div className="btns d-flex align-items-center justify-content-center gap-3"></div>
        </div>
      ) : (
        <div className="card p-3 bg-secondary-subtle shadow">
          <h3 className="p-4 text-center">You Can Install This App</h3>
          <div className="btns d-flex align-items-center justify-content-center gap-3">
            <InstallBtn />
            <div className="custom-loader mx-auto" id="installSpinner">
              <i className="bi bi-arrow-repeat"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PwaGlobalInstall;
