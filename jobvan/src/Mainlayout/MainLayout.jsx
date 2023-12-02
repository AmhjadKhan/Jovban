import { Outlet } from "react-router-dom"
import Navber from "../Helper/Navber/Nabver"


const MainLayout = () => {
  return (
    <div>
        <Navber />
        <Outlet />
        
    </div>
  )
}

export default MainLayout