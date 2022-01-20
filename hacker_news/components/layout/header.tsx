import { FC, useState, useCallback, useEffect, useContext } from 'react';
import Navbar from '../navbar';

interface Props {
  
};

const Header: FC<Props> = ({}) => {
  return (
    <header className="header">

    <a href="#" className="logo"> <i className="fas fa-terminal"></i> Hacker News </a>
    <Navbar />
    <div className="icons">
        <div id="menu-btn" className="fas fa-bars"></div>
        <div id="search-btn" className="fas fa-search"></div>
        <div id="login-btn" className="fas fa-user"></div>
    </div>

    </header>
  )
};
export default Header;