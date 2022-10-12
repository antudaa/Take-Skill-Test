import React, { useState } from 'react';
import './Header.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="navbar bg-base-100 dark-blue shadow-xl">
                <div className="flex-1">
                    <h1 className="btn btn-ghost normal-case text-3xl white">Take Skill Test</h1>
                </div>
                <div className="flex-none ">

                    <ul className={`white dark-blue w-full md:flex  md:static duration-300 ease-in `}>
                        <li><Link className='sm:mr-0 lg:mr-6 hover:text-orange-300' to='/'>Home</Link></li>
                        <li><Link className='sm:mr-0 lg:mr-6 hover:text-orange-300' to='/topics'>Topics</Link></li>
                        <li><Link className='sm:mr-0 lg:mr-6 hover:text-orange-300' to='/statistics'>Statistics</Link></li>
                        <li><Link className='sm:mr-0 lg:mr-6 hover:text-orange-300' to='/blog'>Blog</Link></li>
                    </ul>

                </div>

            </div>
        </div >
    );
};

export default Header;