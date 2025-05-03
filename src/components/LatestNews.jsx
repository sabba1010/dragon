import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 p-3 bg-base-200'>
        <button className='btn btn-secondary'>Latest</button>
        <Marquee pauseOnHover={true}>
        <p className='font-bold'>Lorem i adipisiium beatae asperiores tenetur dolorem cum sapiente, nemo quisquam quam dignissimos totam temporibus
        Lorem i adipisiium   </p>
        </Marquee>
        </div>
    );
};

export default LatestNews;