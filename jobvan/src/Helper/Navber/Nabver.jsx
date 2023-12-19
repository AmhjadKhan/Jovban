
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../../Firebase/Provider/Authprovider";

const Navber = () => {
  const { user, signOutee } = useContext(AuthContex);

  const handleLogout = () => {
    signOutee()
    .then()
    .catch()
  };
  const navitem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addjobs">ADD JOBS</NavLink>
      </li>
      <li>
        <NavLink to="/mypost">My Post</NavLink>
      </li>
      <li>
        <NavLink to="/mybids">MyBids</NavLink>
      </li>
      <li>
        <NavLink to="/login">LogIn</NavLink>
      </li>
      <li>
        <NavLink to="/regster">Regster</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-blue-400 rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navitem}
            </ul>
          </div>
          <div className="">
            <a className="btn btn-ghost normal-case text-xl">JOBS FIND</a>
            <img
              className="w-10 h-10 ml-9 rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8au3ZL-f2uP9JO72i9OrFaDwmUzpAL7tnoiD83d8oBqIL-Aqoypt5GCBb8ewbyZNCR5g&usqp=CAU"
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navitem}</ul>
        </div>
        <div className="w-10 rounded-full ml-5">
        <img alt="A" src={user?.photoURL} />
        </div>
        <h1>{user?.email}</h1>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogout} className="btn btn-primary">Log out</button>  
          ) : (
            <Link to='/login'>
                <button className="btn btn-primary">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
