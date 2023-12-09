import React from "react";
import { useNavigate } from "react-router-dom";

export default function MoreSettings() {
  let navigate = useNavigate();
  return (
    <div className="d-flex flex-column gap-2">
      <div
        className="card p-2 px-4 gap-3 flex-row fs-2 fw-bold justify-content-between"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
      >
        <span>Logout</span>
        <i className="bi bi-box-arrow-right text-info fs-1"></i>
      </div>
      <div
        className="card p-2 px-4 gap-3 flex-row fs-2 fw-bold justify-content-between"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>Language</span>
        <i className="bi bi-globe2 text-info fs-1"></i>
      </div>
      <div className="dropdown">
        <ul className="dropdown-menu w-100">
          <li>
            <a className="dropdown-item" href="#">
              Arabic
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              English
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
