import React from "react";

export default function ListOfInvitations() {
  return (
    <div className="recentlyVisits w-100">
      {Array.from({ length: 4 })?.map((item) => {
        return (
          <div className="card p-3 my-2 flex-row justify-content-between align-items-center">
            <span className="name">{"Ahmed Nasser"}</span>
            <span className="time">30 Min</span>
            <span className="badge text-bg-success">Check In</span>
          </div>
        );
      })}
    </div>
  );
}
