import { useContext } from 'react'
import { AuthContex } from '../Firebase/Provider/Authprovider'
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user} = useContext(AuthContex);

    const location = useLocation()
    console.log(location.pathname)

    if(user){
        return children;
    }
  return <Navigate state={location.pathname} to='/login'></Navigate>
}

export default Privateroute