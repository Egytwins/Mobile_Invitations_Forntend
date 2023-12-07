import React from "react";
import { NavLink } from "react-router-dom";
export default function MobileMune() {
  return (
    <div className="test">
      <div className="mobileNav">
        <NavLink className="mobileTab" to="/dashboard">
          <i className="bi bi-bar-chart-fill"></i>
          <span>Dashboard</span>
        </NavLink>
        <NavLink className="mobileTab" to="/CreateInvitation">
          <i className="bi bi-envelope-fill"></i>
          <span>Create Invitation</span>
        </NavLink>
        <NavLink className="mobileTab" to="/invations">
          <i className="bi bi-person-lines-fill"></i>
          <span>Invitation</span>
        </NavLink>
        <NavLink className="mobileTab" to="/more">
          <i className="bi bi-three-dots-vertical"></i>
          <span>More</span>
        </NavLink>
      </div>
    </div>
  );
}
