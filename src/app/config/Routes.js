import React, {  } from 'react';
import '../styles/Routes.css';
import { AiFillHome, AiFillDatabase, AiFillCalculator, AiFillSetting } from "react-icons/ai";
import {Link} from "react-router-dom";

const Routes = (props) => {


    return(
        <div id='container'>
            <div id="sidebar">
                <Link to={`/`}>
                    <svg className='logo' width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="28.371" y1="5" x2="28.371" y2="62.039" stroke="black"/>
                        <rect x="22.5" y="22.9286" width="10.7419" height="30.6883" fill="#00A74D" stroke="black"/>
                        <path d="M32.9032 23.2208L22.8387 53.3247H32.9032V23.2208Z" fill="#008E41"/>
                        <line x1="42.629" y1="16.8831" x2="42.629" y2="65.9999" stroke="black"/>
                        <rect x="36.7581" y="22.9286" width="10.7419" height="30.6883" fill="#FA1C41" stroke="black"/>
                        <path d="M37.0968 53.3247L47.1613 23.2208H37.0968V53.3247Z" fill="#E8193C"/>
                    </svg>
                </Link>


                <div className="nav_list">
                    <Link to={`/`}><div className={window.location.pathname === "/" ? "nav_item active_nav_item" : "nav_item"}><AiFillHome className='nav_icon'/></div></Link>
                    <Link to={`/trades`}><div className={window.location.pathname === "/trades" ? "nav_item active_nav_item" : "nav_item"}><AiFillDatabase className='nav_icon'/></div></Link>
                    <Link to={`/tools`}><div className={window.location.pathname === "/tools" ? "nav_item active_nav_item" : "nav_item"}><AiFillCalculator className='nav_icon'/></div></Link>
                    <Link to={`/settings`}><div className={window.location.pathname === "/settings" ? "nav_item active_nav_item" : "nav_item"}><AiFillSetting className='nav_icon'/></div></Link>
                </div>


                <Link to={`/`}><img className='nav_acc' src="https://randomuser.me/api/portraits/women/44.jpg" alt="" /></Link>
            </div>
            <div id="content">
                
                {props.children}
            </div>
        </div>
    );
}


export default Routes;