import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQrImage } from "../../Context/QrUrlImage";

export default function QrPageUi() {
  const { qrImageUrl, updateQrImageUrl } = useQrImage();
  useEffect(() => {
    if (qrImageUrl) {
      sessionStorage.setItem("qrImageUrl", qrImageUrl);
    }
  }, [qrImageUrl]);
  async function Share() {
    const fileUrl = qrImageUrl || sessionStorage.getItem("qrImageUrl");
    const fileName = "Avms.png";
    const fileType = "image/png";
    try {
      // Fetch the image file
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      // Create a file object
      const file = new File([blob], fileName, { type: fileType });
      // Use the Share API to share the file
      await navigator.share({
        files: [file],
      });
    } catch (err) {
      console.error("Share failed:", err.message);
    }
  }
  return (
    <div className="w-100 h-100vh d-flex align-items-center justify-content-center flex-column gap-4">
      <img
        src={qrImageUrl || sessionStorage.getItem("qrImageUrl")}
        alt="qrImageUrl"
        className="rounded-5 w-100"
      />
      <button className="btn btn-info text-white px-3" onClick={Share}>
        Share <i className="bi bi-share"></i>
      </button>
    </div>
  );
}
