import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { client, manager, supervisor } from '../assets/MenuData';
import Logo from '../assets/images/Logo.png';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  const [menu, setMenu] = useState(manager);
  const [open, setOpen] = useState(false);

  const toggleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="hidden sm:flex flex-col justify-between bg-myDarkBlue h-screen md:w-56">
      <aside
        className="w-full h-4/5 p-5 mt-28 flex flex-col justify-between "
        aria-label="Sidebar"
      >
        <span>
          {menu.map((item) => (
            <Menu
              name={item.name}
              icon={item.icon}
              subMenu={item.subMenu}
              url={item.url}
              key={item.id}
            />
          ))}
        </span>
        <span>
          <Menu
            name="Logout"
            icon={<PowerSettingsNewIcon className="text-myRed" />}
          />
        </span>
      </aside>
    </div>
  );
};

export default SideMenu;
