import { FC, useState, useCallback, useEffect, useContext } from 'react';

interface Props {
  
};

const Navbar: FC<Props> = ({}) => {

  return (
    <nav className="navbar">
        <a href="#">stories</a>
        <a href="#">archive</a>
        <a href="#">about</a>
        <a href="#">contact</a>
    </nav>
  )
};
export default Navbar;