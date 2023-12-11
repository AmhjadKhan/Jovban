import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const Jobs = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-4">
      <div className="text-center items-center">
        <h2 className="card-title text-5xl">Our All Jobs</h2>
        <p>If a dog chews shoes whose shoes does he choose?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste tempora voluptate cum eos repellat voluptatem libero blanditiis explicabo dignissimos modi est doloribus quis quo ducimus, praesentium non laborum fugit laudantium, sint esse? Architecto officiis numquam neque perspiciatis, dolorem dignissimos quo, itaque in animi quae rerum esse quidem voluptatibus, dolore omnis?</p>
        <div className="col-span-1 mt-10 gap-5 border-red-600">
            {
                services.map(service =><JobCard key={service.id} service={service} />)
            }
        </div>
        
      </div>
    </div>
  );
};

export default Jobs;
