import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Nav from '../components/Nav';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';

const Home = () => {
    return (
        <div>
            <header>
                <Header/>
                <section className='w-11/12 mx-auto my-3'>
                <LatestNews/>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Nav/>
                </nav>
            </header>

            {/* Main */}
            <main className='w-11/12 mx-auto my-3 
            grid grid-cols-12 gap-5
            '>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside/>
                </aside>
                {/*  */}
               <section className="main col-span-6">
                <Outlet></Outlet>
               </section>
                {/*  */}
                <aside className='col-span-3 sticky top-2 h-fit'>
                    <RightAside/>
                </aside>

            </main>
        </div>
    );
};

export default Home;