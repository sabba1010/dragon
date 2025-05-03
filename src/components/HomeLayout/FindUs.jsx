import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold'>Find Us On</h1>
            <div className="">
            <div className="join join-vertical w-full">
  <button className="btn bg-base-100join-item justify-start"><FaFacebook /> FaceBook</button>
  <button className="btn bg-base-100join-item justify-start"><FaTwitter /> Twiter</button>
  <button className="btn bg-base-100join-item justify-start"><FaInstagram /> Instagram</button>
</div>

            </div>
        </div>
    );
};

export default FindUs;