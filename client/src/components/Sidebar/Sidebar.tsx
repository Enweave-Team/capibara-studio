import React, {useState} from 'react';
import sidebar_button from "../../assets/Vector.svg";
import './SibebarStyles.scss';
import {Link} from "react-router-dom";
import {SidebarData} from "./SidebarData";
import ReactDOM from "react-dom";
import {ReactComponent as Mark} from "../../assets/Mark.svg";

const Sidebar = (props: any) => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    const Backdrop = (props: any) => {
        return <aside className={sidebar ? 'nav-menu active' : 'nav-menu no-active'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle'>
                    <Mark onClick={showSidebar} className='mark-button'/>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <span>{item.text}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </aside>
    }

    const portalDiv = document.getElementById('backdrop-root')!;

    return (
        <>
            <div onClick={showSidebar} className="pointer">
                <img src={sidebar_button} alt="Sidebar_button"/>
            </div>
            {ReactDOM.createPortal(<Backdrop/>, portalDiv)}
        </>


    );
};

export default Sidebar;