import React from 'react';
import { NavLink } from 'react-router';

const Nav = () => {
    return (
        <div className='flex justify-between'>
           <div></div>
           <div className="flex gap-3 text-accent">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>


           </div>
          
           <div className="flex gap-3">
           <img src="public/assets/user.png" alt="" />
            <button className='btn btn-primary'>Login</button></div>
        </div>
    );
};

export default Nav;