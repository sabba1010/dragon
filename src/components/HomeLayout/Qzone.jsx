import React from 'react';
import swmingImage from "../../assets/swimming.png"
import classImage from "../../assets/class.png"
import PlayImage from "../../assets/playground.png"
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
           <div>
           <h1 className='font-bold'>QZone</h1>
           </div>
           <div>
            <img src={swmingImage} alt="" />
            <img src={classImage} alt="" />
            <img src={PlayImage} alt="" />
           </div>
        </div>
    );
};

export default Qzone;