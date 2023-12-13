import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Firebase/Provider/Authprovider";

const Regester = () => {

  const {creatrUser} = useContext(AuthContex)

    const handleRegister = e =>{
        e.preventDefault();
        const fromData = new FormData (e.currentTarget);
        const name = fromData.get('name')
        const photo = fromData.get('photo')
        const email = fromData.get('email')
        const password = fromData.get('password')
    // console.log(name, photo, email, password)
    creatrUser(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .then(error =>{
      console.error(error);
    })


    }
  return (
    <div>
        <div className="hero min-h-screen bg-blue-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className="h-72" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFPbdTDcsqPqUlPq4V-PglpgjxKtH9KXvrQ&usqp=CAU" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Enter your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="name"
                  name="Photo"
                  placeholder="Enter your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            {/* <button onClick={handleGoogle} className="text-2xl bg-gray-300"><span className="text-blue-700">G</span><span className="text-yellow-700">oo</span><span className="text-blue-700">g</span> <span className="text-green-700">l</span> <span className="text-red-700">e</span></button> */}
            <p>
              you have account Please{" "}
              <Link className="text-primary" to="/login">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Regester