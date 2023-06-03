import React from 'react';
import './NavbarStyles.scss';
import Sidebar from "../Sidebar/Sidebar";
import Login from "../Login/Login";
import {Link} from "react-router-dom";



const Navbar = () => {



    return (
        <div className='background__wrapper'>
            <div className='wrapper__navbar'>
                <div className='wrapper__nav'>
                    <div className='sidebar__li'>
                        <Link to='#'>
                            <Sidebar />
                        </Link>
                        <nav>
                            <ul className='navbar-ul-list'>
                                <li><a href="/">Головна</a></li>
                                <li><a href="/">Наші майстри</a></li>
                                <li><a href="/">Послуги</a></li>
                                <li><a href="/">Відгук</a></li>
                                <li><a href="/">Прайс</a></li>
                                <li><a href="/">Як знайти</a></li>
                                <li><a href="/">Контакти</a></li>
                            </ul>
                        </nav>
                    </div>
                    <Login/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;