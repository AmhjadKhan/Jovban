import React from "react";

const JobCard = ({ service }) => {
  // console.log(service);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={service.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service.jobtitle}</h2>
         <div className="flex justify-between">
         <p>{service.Deadline}</p>
         <p>{service.minimum_price}</p>
         </div>
         <p>Moporem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti dicta illo, quod maiores hic sit delectus fugiat animi perspiciatis?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">BID NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
