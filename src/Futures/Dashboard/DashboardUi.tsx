import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { GetInvationsInfo, GetLastFiveItems } from "./Dashboard.Services";
import { string } from "yup";
import { Invitations } from "./Dashboard.Interface";
import { Link } from "react-router-dom";

export default function DashboardUi() {
  let [GEtInfoData, setGEtInfoData] = useState({
    totalTodayVisits: 0,
    totalUpcomingVisits: 0,
    totalExpiredVisits: 0,
  });
  let [LastFiveItems, setLastFiveItems] = useState<Invitations[]>([]);
  useEffect(() => {
    GetInvationsDataInfo();
  }, []);
  const GetInvationsDataInfo = async () => {
    try {
      let res: any = await GetInvationsInfo();
      let data: any = await GetLastFiveItems(1, 5);
      setLastFiveItems(data.data);
      setGEtInfoData(res);
    } catch (err) {
      console.log(err);
    }
  };
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
              <h3 className="text-center">{GEtInfoData?.totalTodayVisits}</h3>
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
              <h3 className="text-center">
                {GEtInfoData?.totalUpcomingVisits}
              </h3>
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
              <h3 className="text-center">{GEtInfoData?.totalExpiredVisits}</h3>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="recentlyVisits w-100">
        <div className="table_Invitation_text d-flex justify-content-between align-items-center p-2">
          <h3 className="m-0">Recently Visits</h3>
          <Link to="/app/invations" className="text-info fw-bold fs-5">
            View All
          </Link>
        </div>
        <div className="">
          {LastFiveItems
            ? LastFiveItems.map((item) => {
                return (
                  <div
                    className="card p-3 my-2 flex-row justify-content-between align-items-center"
                    key={item.id}
                  >
                    <span className="name">
                      {item.name !== undefined && item.name?.length > 5
                        ? item.name
                            ?.split("")
                            .splice(0, 5)
                            .concat("...")
                            .join("")
                        : item.name}
                    </span>
                    <span className="time">
                      {item.registrationDate
                        ? new Date(item.registrationDate)
                            .toDateString()
                            .split("")
                            .splice(0, 10)
                            .concat("...")
                            .join("")
                        : ""}
                    </span>
                    <span className="badge text-bg-success">Check In</span>
                  </div>
                );
              })
            : "There's No Data Available"}
        </div>
      </div>
    </div>
  );
}
