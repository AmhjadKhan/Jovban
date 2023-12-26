import React, { useContext, useEffect } from 'react';
import { AuthContex } from '../../Firebase/Provider/Authprovider';

const Mybids = () => {
  const { user } = useContext(AuthContex);

  const url = `http://localhost:5000/bids?bidemail=${user?.bidemail || ''}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [url]);

  return <div>Mybids</div>;
};

export default Mybids;
