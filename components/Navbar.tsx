import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

import { SidebarData } from './SidebarData';

interface Props {}

const Navbar: React.FC<Props> = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebarHandler = () => {
    setSidebar((prevState) => (prevState = !prevState));
  };

  return (
    <Fragment>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link href="/">
            <a className="menu-bars">
              <FaIcons.FaBars onClick={showSidebarHandler} />
            </a>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebarHandler}>
            <li className="navbar toggle">
              <Link href="/">
                <a className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </a>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link href={item.path}>
                    <a>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </Fragment>
  );
};

export default Navbar;
