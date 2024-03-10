// import React, { useContext, useEffect, useState } from "react";
// import { AuthContex } from "../../Firebase/Provider/Authprovider";

// const Mypost = () => {
//   const { user } = useContext(AuthContex);
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     if (!user) return;
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://back-phi-one.vercel.app/addjob?email=${user.email}`);
//         const data = await response.json();
//         setJobs(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [user]);

//   return (
//     <div>
//       <h1>My Jobs</h1>
//       <div className="">
//         {jobs.map((job) => (
//           <li key={job.id}>
//             <h2>{job.category}</h2>
//             <h2>{job.jobtitle}</h2>
//             <p>{job.descraption}</p>
//           </li>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Mypost;

import React, { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Firebase/Provider/Authprovider";
import Myadjobs from "./Myadjobs";

const Mypost = () => {
  const { user } = useContext(AuthContex);
  const [Addjobs, setAddjobs] = useState([]);

  const url = `https://back-phi-one.vercel.app/addjobs?useremail=${
    user?.email || ""
  }`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddjobs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [url]);

  return (
    <div className="mt-10 mb-5">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {Addjobs.map((Addjobs) => (
          <Myadjobs key={Addjobs._id} Addjobs={Addjobs} />
        ))}
      </div>
    </div>
  );
};

export default Mypost;
