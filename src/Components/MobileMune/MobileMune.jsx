import React from "react";
import { NavLink } from "react-router-dom";
export default function MobileMune() {
  return (
    <div className="test">
      <div className="mobileNav">
        <NavLink className="mobileTab" to="/cameras">
          <i class="bi bi-alarm-fill"></i>
          <span>Camera</span>
        </NavLink>
        <NavLink className="mobileTab" to="/">
          <i class="bi bi-alarm-fill"></i>
          <span>Server</span>
        </NavLink>
        <NavLink className="mobileTab" to="/licenes">
          <i class="bi bi-alarm-fill"></i>
          <span>License</span>
        </NavLink>
        <NavLink className="mobileTab" to="/events">
          <i class="bi bi-alarm-fill"></i>
          <span>Triggers</span>
        </NavLink>
      </div>
    </div>
  );
}
