import { Link } from "react-router-dom"

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
          <h2 className="card-title text-3xl">{service.jobtitle}</h2>
         <div className="flex justify-between">
         <p className="text-xl">Date:{service.Deadline}</p>
         <p className="text-xl">price:{service.minimum_price}</p>
         </div>
         <p className="text-center">Moporem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti dicta illo, quod maiores hic sit delectus fugiat animi perspiciatis?</p>
          <div className="card-actions justify-center">
            <Link to={`/details/${service._id}`}>
            <button className="btn btn-primary">BID NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
