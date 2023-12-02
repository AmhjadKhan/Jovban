import { Outlet } from "react-router-dom"
import Navber from "../Helper/Navber/Nabver"
import Footer from "../Helper/Footer/Footer"


const MainLayout = () => {
  return (
    <div className="gap-4">
        <Navber />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout