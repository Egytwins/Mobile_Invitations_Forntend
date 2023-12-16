import React from "react";
import InstallBtn from "./InstallBtn";
import Carousel from "react-bootstrap/Carousel";
import step1 from "../../assets/images/Pwa_Steps_Install/Step1.jpg";
import step2 from "../../assets/images/Pwa_Steps_Install/Step2.jpg";
import step3 from "../../assets/images/Pwa_Steps_Install/Step3.png";
import step4 from "../../assets/images/Pwa_Steps_Install/Step4.jpg";
type PlatformType = "android" | "ios";

let imgArr = [step1, step2, step3, step4];
interface PwaGlobalInstallProps {
  platform: PlatformType;
  setIsPwaInstalled: React.Dispatch<React.SetStateAction<boolean>>;
}

const PwaGlobalInstall: React.FC<PwaGlobalInstallProps> = ({
  platform,
  setIsPwaInstalled,
}) => {
  return (
    <div
      id="Modal"
      className="modal d-flex flex-column align-items-center justify-content-center position-fixed bg-white p-5"
    >
      {platform === "ios" ? (
        <div className="card p-3 bg-secondary-subtle shadow">
          <Carousel controls={true} indicators={false} className="mb-5 mt-3">
            {imgArr.map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={item} alt="First slide" />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      ) : (
        <div className="card p-3 bg-secondary-subtle shadow">
          <h3 className="p-4 text-center">You Can Install This App</h3>
          <div className="btns d-flex align-items-center justify-content-center gap-3">
            <InstallBtn setIsPwaInstalled={setIsPwaInstalled} />
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
