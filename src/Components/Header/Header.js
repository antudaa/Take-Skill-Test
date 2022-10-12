import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 dark-blue shadow-xl">
                <div className="flex-1">
                    <h1 className="btn btn-ghost normal-case text-3xl white">Take Skill Test</h1>
                </div>
                <div className="flex-none">
                    <ul className="white text-md menu menu-horizontal p-0">
                        <li><Link className=' lg:mr-6 hover:text-orange-300' to='/'>Home</Link></li>
                        <li><Link className=' lg:mr-6 hover:text-orange-300' to='/topics'>Topics</Link></li>
                        <li><Link className='lg:mr-6 hover:text-orange-300' to='/statistics'>Statistics</Link></li>
                        <li><Link className=' lg:mr-6 hover:text-orange-300' to='/blog'>Blog</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;