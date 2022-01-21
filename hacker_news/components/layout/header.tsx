import { FC, useEffect, useRef, useState } from 'react';
import Navbar from '../navbar';

const Header: FC = () => {

  const headerRef = useRef<HTMLDivElement>(null);
  const [spacerHeight, setSpacerHeight] = useState(headerRef.current?.offsetHeight);

  //Used to update height of the spacer div to match height of the header.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const updateHeight = (delay: number) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setSpacerHeight(headerRef.current?.offsetHeight);
      }, delay);
    }
    updateHeight(500);
    window.addEventListener('resize', () => {updateHeight(100)});
    return () => window.removeEventListener('resize', () => {updateHeight(100)});
  }, []);

  return (
    <>
      <header className="header" ref={headerRef}>
        <a href="#" className="logo"> <i className="fas fa-terminal"></i> Hacker News </a>
        <Navbar />
        <div className="icons">
            <div id="menu-btn" className="fas fa-bars"></div>
            <div id="search-btn" className="fas fa-search"></div>
            <div id="login-btn" className="fas fa-user"></div>
        </div>
      </header>
      <div className='header-spacer' style={{height: spacerHeight}}></div>
    </>
  )
};
export default Header;