import { useContext } from 'react'
import { AuthContex } from '../Firebase/Provider/Authprovider'
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user, loading} = useContext(AuthContex);
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user?.bidemail){
        return children
    }
  return <Navigate to='/login' replace></Navigate>
}

export default Privateroute