import React, { useEffect, useState } from "react";
import { Invitations } from "../Dashboard/Dashboard.Interface";
import { GetLastFiveItems } from "../Dashboard/Dashboard.Services";

export default function ListOfInvitations() {
  let [ListInvitations, setGEtInfoData] = useState<Invitations[]>([]);
  useEffect(() => {
    GetInvationsDataInfo();
  }, []);
  const GetInvationsDataInfo = async () => {
    try {
      let data: any = await GetLastFiveItems(1, 20);
      setGEtInfoData(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="recentlyVisits w-100">
      {ListInvitations?.map((item) => {
        return (
          <div
            className="card p-3 my-2 flex-row justify-content-between align-items-center"
            key={item.id}
          >
            <span className="name">{item.name}</span>
            <span className="time">
              {item.registrationDate
                ? new Date(item.registrationDate).toDateString()
                : ""}
            </span>
            <span className="badge text-bg-success">Check In</span>
          </div>
        );
      })}
    </div>
  );
}
