import { FC, useState, useCallback, useEffect, useContext } from 'react';

interface Props {
  
};

const Header: FC<Props> = ({}) => {
  return (
    <header className="header">
        <a href="#" className="logo">hacker news</a>
    </header>
  )
};
export default Header;