import React from "react";

export default function DashboardUi() {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide fixed-top my-3"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="bg-info w-75 rounded-4 m-auto p-2 d-flex align-items-center gap-2">
              <span className="bg-white p-4 rounded-4 text-info">
                <i className="bi bi-alarm fs-2"></i>
              </span>
              <div className="tail-text text-white">
                <h4>Today Visits</h4>
                <h3 className="text-center">8</h3>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="bg-success w-75 rounded-4 m-auto p-2 d-flex align-items-center gap-3">
              <span className="bg-white p-4 rounded-4 text-success">
                <i className="bi bi-hourglass-split fs-2"></i>
              </span>
              <div className="tail-text text-white">
                <h4>Schedule Visits</h4>
                <h3 className="text-center">5</h3>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="bg-warning w-75 rounded-4 m-auto p-2 d-flex align-items-center gap-2">
              <span className="bg-white p-4 rounded-4 text-warning">
                <i className="bi bi-calendar-check fs-2"></i>
              </span>
              <div className="tail-text text-white">
                <h4>Punch In Visits</h4>
                <h3 className="text-center">2</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
