import React, { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Firebase/Provider/Authprovider";
import Bidsrow from "./Bidsrow";

const Mybids = () => {
  const { user } = useContext(AuthContex);
  const [bids,setbids] = useState([])

  const url = `https://back-phi-one.vercel.app/bids?bidemail=${user?.bidemail || ""}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setbids(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [url]);

  return (
  <div className="mt-10 mb-5">
     <div className="overflow-x-auto">
  <table className="table">
    <tbody>
      <div>
      {
        bids.map(bids =><Bidsrow key={bids._id} bids={bids}/>)
      }
      </div>
    </tbody> 
  </table>
</div>
  </div>
  )};

export default Mybids;
