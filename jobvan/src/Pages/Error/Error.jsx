import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://c8.alamy.com/comp/2F4EH7C/display-error-404-page-not-found-lettering-template-made-with-no-signal-lettering-signal-page-internet-failure-outage-error-message-with-color-text-2F4EH7C.jpg)",
        }}
      >
        
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <Link to='/'>
              <button className="btn border-green-500 text-lg bg-blue-500">GO TO Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
