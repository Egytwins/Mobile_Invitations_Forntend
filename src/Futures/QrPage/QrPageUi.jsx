import React from "react";
import { useParams } from "react-router-dom";

export default function QrPageUi({ d }) {
  // let { qrUrl } = useParams();
  // console.log(qrUrl);
  console.log(d);
  return (
    <div className="w-100 h-100vh d-flex align-items-center justify-content-center">
      <img src={d} alt="" />
    </div>
  );
}
