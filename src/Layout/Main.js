import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <nav>
                <Link to='/login'>Login</Link>
                <Link to='/regester'>Resister</Link>
                <Outlet></Outlet>
            </nav>
        </div>
    );
};

export default Main;