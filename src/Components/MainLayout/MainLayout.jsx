import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MobileMune from "../MobileMune/MobileMune";

export default function MainLayout(props) {
  return (
    <>
      <div className="bgImage"></div>
      <div className="d-flex w-100 h-100 justify-content-center  py-4 position-relative zindexMain">
        {/* Create a container for content */}
        <div className="container h-100">
          <Outlet></Outlet>
          {/* Render the child components specified by the Router */}
        </div>
      </div>
      <MobileMune />
    </>
  );
}
