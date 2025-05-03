import { format } from 'date-fns';
import React from 'react';


const Header = () => {
    return (
        <div >
            <div className='text-center mt-6'>
            <img className='mx-auto' src="public/assets/logo.png" alt="" />
            <p className='mt-4 mb-2 text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-accent'>
                {format(new Date(),"EEEE , MMMM MM, yyyy" , )}</p>
          
            </div>
        </div>
    );
};

export default Header;