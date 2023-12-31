import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from "../../Firebase/Provider/Authprovider";

const Details = () => {
  const jobDetail = useLoaderData();
  // console.log(jobDetail);
  const {_id,jobtitle,Email,Deadline,category,maximum_price,description,image,minimum_price,
  } = jobDetail;
  const {user} = useContext(AuthContex);

  const handleBids = event =>{
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const dedline = form.dedline.value; 
    const bidemail = user?.email;
    const bidname = user?.name;
    const bidInfo={
       price,dedline,bidemail,bidname,_id,Email,image,category,jobtitle
    }
    console.log(bidInfo)

    fetch(' https://back-pevs19abz-amhjadkhans-projects.vercel.app/bids',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(bidInfo)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
    })
  }

  return (
    <div className="mt-10">
      <div className="hero min-h-screen bg-gray-400">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{jobtitle}</h1>
            <div className="flex justify-between">
              <p className="py-6 text-3xl">Date:{Deadline}</p>
              <p className="py-6 text-3xl">price:{minimum_price}</p>
            </div>
            <p className="py-6">{description}</p>
            <div>
              <div className="card w-full">
                <form className="card-body" onSubmit={handleBids}>
                 <div className="grid md:grid-cols-2 gap-10">
                 <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-bold">price</span>
                    </label>
                    <input
                      type="text"
                      placeholder="price"
                      name="price"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-bold">Dedline</span>
                    </label>
                    <input
                      type="text"
                      placeholder="dd/mo/ye"
                      name="dedline"
                      className="input input-bordered"
                      required
                    />
                  </div>
                 </div>
                 <input className='btn btn-primary' type="submit" value='BiD NoW' />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
