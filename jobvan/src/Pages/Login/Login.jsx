import React from 'react'

const Login = () => {
    const handleLogin = e =>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email');
        const password = formData.get('password')
        console.log(email, password)
    }
  return (
    <div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbt2iUMr19WvoNKMP8zfkhK7Jh25hiQHmcg&usqp=CAU"
            alt="jobs"
          />
        </figure>
        <div className="card-body">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                <form className="card-body" onSubmit={handleLogin}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-yellow-200">Email</span>
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
                      <span className="label-text text-yellow-200">
                        Password
                      </span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered text-yellow-200"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <input className='btn btn-primary' type="submit" value='Login' />
                  </div>
                </form>
                <button className="bg-yellow-200 text-black">
                   GOOGLE
                </button>
                <p>
              No Account please{" "}
              {/* <Link className="text-primary" to="/regster">
                REGISTER
              </Link> */}
            </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
