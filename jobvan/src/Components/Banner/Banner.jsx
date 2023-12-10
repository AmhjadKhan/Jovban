import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <div className="mt-5 mb-4">
      <Carousel>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNK3BAL4t0SYExWYzW1ffQKASMlA-KFkKQJsbXgicWXqNZ3r3Pmwcc2_J-7jBRsZxJ9xw&usqp=CAU)",
          }}
        >
          <div className="hero-content text-center bg-slate-500 text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl text-red-500 font-bold">FITNESS TRAKER</h1>
              <p className="mb-5 text-gray-400">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link to='/addjobs'> 
              <button className="btn btn-primary">BOOK NOW</button>
              </Link>
            </div>
          </div>
        </div>
        {/* 1st */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdsETbCdsejqzVrCE77fI_qaHOLvGjZq3ayQ&usqp=CAU)",
          }}
        >
          <div className="hero-content text-center bg-slate-500 text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl text-red-500 font-bold">Job Search</h1>
              <p className="mb-5 text-gray-400">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link to='/addjobs'>
                <button className="btn btn-primary">Apply NOW</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuClrFYEDCczZ9FU5Mm3bzQtLBNrIH968N11erclvs7WRl8ncNVSAVwRqiyuAb_K8wSyU&usqp=CAU)",
          }}
        >
          <div className="hero-content text-center bg-slate-500 text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl text-red-500 font-bold">Drem job</h1>
              <p className="mb-5 text-gray-400">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link to='/addjobs'>
                <button className="btn btn-primary">Apply NOW</button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
