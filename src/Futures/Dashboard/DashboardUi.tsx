import React from "react";
import Carousel from "react-bootstrap/Carousel";
export default function DashboardUi() {
  return (
    <div>
      <Carousel controls={false} indicators={false} className="mb-5 mt-3">
        <Carousel.Item>
          <div className="bg-info w-100 rounded-4 m-auto p-2 d-flex align-items-center gap-4">
            <span className="bg-white p-4 rounded-4 text-info">
              <i className="bi bi-alarm fs-2"></i>
            </span>
            <div className="tail-text text-white">
              <h4>Today Visits</h4>
              <h3 className="text-center">8</h3>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-warning w-100 rounded-4 m-auto p-2 d-flex align-items-center gap-4">
            <span className="bg-white p-4 rounded-4 text-warning">
              <i className="bi bi-hourglass-split fs-2"></i>
            </span>
            <div className="tail-text text-white">
              <h4>Schedule Visits</h4>
              <h3 className="text-center">5</h3>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-success w-100 rounded-4 m-auto p-2 d-flex align-items-center gap-4">
            <span className="bg-white p-4 rounded-4 text-success">
              <i className="bi bi-calendar-check fs-2"></i>
            </span>
            <div className="tail-text text-white">
              <h4>Punch In Visits</h4>
              <h3 className="text-center">2</h3>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="recentlyVisits w-100">
        <h3>Recently Visits</h3>
        <div className="card p-3 my-2 flex-row justify-content-between align-items-center">
          <span className="name">Ahmed Na..</span>
          <span className="time">30 Min</span>
          <span className="badge text-bg-success">Check In</span>
        </div>
        <div className="card p-3 my-2 flex-row justify-content-between align-items-center">
          <span className="name">Mohamd A..</span>
          <span className="time">10 days</span>
          <span className="badge text-bg-warning">Up Coming</span>
        </div>
        <div className="card p-3 my-2 flex-row justify-content-between align-items-center">
          <span className="name">Any Thing..</span>
          <span className="time">yesterday</span>
          <span className="badge text-bg-danger">Cancled</span>
        </div>
      </div>
    </div>
  );
}
