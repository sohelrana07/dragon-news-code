import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold">Find Us On</h2>

      <div className="join join-vertical w-full mt-5">
        <button className="btn bg-base-100 text-accent justify-start join-item">
          <FaFacebook size={18}></FaFacebook> Facebook
        </button>
        <button className="btn bg-base-100 text-accent justify-start join-item">
          <FaTwitter size={18}></FaTwitter> Twitter
        </button>
        <button className="btn bg-base-100 text-accent justify-start join-item">
          <FaInstagram size={18}></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
