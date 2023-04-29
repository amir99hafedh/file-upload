import React from "react";
import JobItems from "./JobItems";
import "./JobList.css";

const JobList = (props) => {
  return (
    <div className="place-list">
      {props.items.map((data) => (
        <JobItems
          id={data._id}
          title={data.titre}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default JobList;
