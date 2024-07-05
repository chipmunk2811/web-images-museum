import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import "./style.css";
import { useSelector } from 'react-redux';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const { Navlink } = useSelector((state) => state.settingReducer);
    const renderNavLink = () => {
        return Navlink.map((item) => {
            return <NavLink key={item.link} to={item.link} className={!isOpen ? 'hidden' : ''} onClick={handleClick}>
                <i className={item.icon} />
                <span className={`${!isOpen ? 'hidden' : ''} `}>{item.namePage}</span>
            </NavLink>
        })
    }
    return (
        <section className="nav-link">

            <button id="changePage" onClick={handleClick} value={isOpen ? 'open' : 'close'}>
                <i className="las la-home" />
            </button>

            {renderNavLink()}
            {/* <NavLink to="/" className={!isOpen ? 'hidden' : ''} onClick={handleClick}>
                <i className="las la-map" />
                <span className={`${!isOpen ? 'hidden' : ''} `}>BẢN ĐỒ</span>
            </NavLink>
            <NavLink to="/page2" className={!isOpen ? 'hidden' : ''} onClick={handleClick}>
                <i className="las la-image" />
                <span className={`${!isOpen ? 'hidden' : ''} `}>TƯ LIỆU HÌNH ẢNH</span>
            </NavLink>
            <NavLink to="/page3" className={!isOpen ? 'hidden' : ''} onClick={handleClick}>
                <i className="las la-ship" />
                <span className={`${!isOpen ? 'hidden' : ''} `}>NHỮNG CÂY CẦU</span>
            </NavLink>
            <NavLink to="/page4" className={!isOpen ? 'hidden' : ''} onClick={handleClick}>
                <i className="las la-water" />
                <span className={`${!isOpen ? 'hidden' : ''} `}>VĂN HÓA SÔNG NƯỚC</span>
            </NavLink> */}




        </section>
    );
}
