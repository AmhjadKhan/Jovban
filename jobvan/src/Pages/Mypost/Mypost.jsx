import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Firebase/Provider/Authprovider";

const Mypost = () => {
  const { user } = useContext(AuthContex);
  console.log(user)
  const [posts, setPosts] = useState([]);

  const url = `https://back-phi-one.vercel.app/Addjobs?Email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(object)(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [url]);

  return (
    <div>
      
    </div>
  );
};

export default Mypost;
