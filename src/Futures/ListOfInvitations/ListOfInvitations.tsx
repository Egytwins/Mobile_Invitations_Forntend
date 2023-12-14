import React, { useEffect, useState } from "react";
import { Invitations } from "../Dashboard/Dashboard.Interface";
import { GetLastFiveItems } from "../Dashboard/Dashboard.Services";
import StatusVisitLabels from "../../utilities/StatusVisitLabels/StatusVisitLabels";

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
      {ListInvitations
        ? ListInvitations.map((item) => {
            return (
              <div
                className="card p-3 my-2 flex-row justify-content-between align-items-center"
                key={item.id}
              >
                <span className="name">
                  {item.name !== undefined && item.name?.length > 5
                    ? item.name?.split("").splice(0, 5).concat("...").join("")
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
                <StatusVisitLabels number={item?.registraionStatus} />
              </div>
            );
          })
        : "There's No Data Available"}
    </div>
  );
}
