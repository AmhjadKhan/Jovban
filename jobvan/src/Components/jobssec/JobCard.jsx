import React from "react";

const JobCard = ({ service }) => {
  console.log(service);
  return (
    <div className="">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={service.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{service.name}</h1>
            <p className="py-6">
             {service.descraption}
            </p>
            <button className="btn btn-primary">Go to jobs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
