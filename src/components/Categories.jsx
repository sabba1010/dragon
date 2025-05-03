import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("/categories.json")
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    return (
        <div>
            <h1 className='font-bold'>All Categories {categories.length}</h1>
            <div className='grid grid-cols-1 mt-5 gap-1'>
                {categories.map((category) => (
                    <NavLink
                        key={category.id}
                        className="btn font-semibold bg-white border-0
                        hover:bg-base-200"
                        to={`/category/${category.id}`} // if you want navigation
                    >
                        {category.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Categories;
