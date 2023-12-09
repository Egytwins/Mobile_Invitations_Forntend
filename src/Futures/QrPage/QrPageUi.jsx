import React from "react";
import { useParams } from "react-router-dom";
import { useQrImage } from "../../Context/QrUrlImage";

export default function QrPageUi({ d }) {
  const { qrImageUrl, updateQrImageUrl } = useQrImage();

  console.log(qrImageUrl);
  return (
    <div className="w-100 h-100vh d-flex align-items-center justify-content-center">
      <img src={qrImageUrl} alt="" />
    </div>
  );
}
