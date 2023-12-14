import React from "react";

const StatusVisitLabels = ({ number }) => {
  let label;
  let labelStyle;

  switch (number) {
    case 1:
      label = "Today";
      break;
    case 2:
      label = "Up Coming";
      break;
    default:
      label = "Cancelad";
      break;
  }

  return (
    <span
      className={
        number === 1 ? "badge text-bg-success" : "badge text-bg-warning"
      }
    >
      {label}
    </span>
  );
};

export default StatusVisitLabels;
