import React from "react";

const Myadjobs = ({ Addjobs }) => {
  console.log(Addjobs);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={Addjobs.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Addjobs.jobtitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default Myadjobs;
