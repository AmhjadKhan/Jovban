import React from 'react'

const Addjobs = () => {
  const categorys = [
    {label:"Web_Development",value:1},
    {label:"Digital_Marketing", value:2},
    {label:"Graphics_Design",value:3}
  ]
  const handleForm = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const Deadline = form.Deadline.value;
    const jobtitle = form.jobtitle.value;
    const mimimumprice = form.minimum_price.value;
    const maximumprice = form.maximum_price.value;
    const descraption = form.descraption.value;
    const image = form.image.value;
    
      
     const alljobs ={email,mimimumprice,categorys,maximumprice,jobtitle,descraption,image,Deadline}
     console.log(alljobs)

    //  send data to server 
    // fetch('https://backend-nu4lt7xhz-amhjadkhans-projects.vercel.app/allCars',{
    //    method:'POST',
    //    headers: {
    //     'content-type':'application/json'
    //    },
    //    body:JSON.stringify(allCars)
    // })
    // .then(res => res.json())
    // .then(data =>{
    //   console.log(data)
    // })
  }
  return (
    <div className=" py-46">
      <h1 className="text-center text-3xl font-bold">You ADD your product in Home</h1>
      <form onSubmit={handleForm}>

        {/* 1.email */}
      <div className="gap-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Email</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="email"
            placeholder="Car name"
            className="input input-bordered w-full"
          />
        </label>
      </div>

       {/* 2.this is jobtitle  */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Job Title</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="jobtitle"
            placeholder="job title"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      {/* add caregory  */}
      <div className="form-control">
  <label className="label">
    <span className="label-text font-bold">Job category</span>
  </label>
  <label className="input-group">
    <select className="input input-bordered w-full" name="category">
      {categorys?.map(category => (
        <option key={category.value} value={category.value}>
          {category.label}
        </option>
      ))}
    </select>
  </label>
</div>
      {/* 3.this is deadline date  */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Deadline</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="Deadline"
            placeholder="job title"
            className="input input-bordered w-full"
          />
        </label>
      </div>

      {/* 4.price section  */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Minimum price</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="minimum_price"
            placeholder="price"
            className="input input-bordered w-full"
          />
        </label>
      </div>
     {/* 5. maximum price  */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Maximum price</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="maximum_price"
            placeholder="maximum price"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      {/* 6.discraption  */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Short Descraprion</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="descraption"
            placeholder="Car name"
            className="input input-bordered w-full"
          />
        </label>
      </div>

      {/* 7.image section  */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Image-url</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="image"
            placeholder="image"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      </div>
      <input className="btn btn-block mt-6 bg-slate-600" type="submit" value='ADD CARS' />
      </form>
    </div>
  )
}

export default Addjobs