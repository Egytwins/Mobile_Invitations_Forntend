import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function CheckToken(props) {
  if (localStorage.getItem("token")) {
    return props.children;
  } else {
    return <Navigate to="/"></Navigate>;
  }
}
export function CheckLoginNaviagte(props) {
  if (localStorage.getItem("token")) {
    return <Navigate to="/app/dashboard"></Navigate>;
  } else {
    return props.children;
  }
}
