import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { client, manager, supervisor } from '../assets/MenuData';
import Logo from '../assets/images/Logo.png';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  const [menu, setMenu] = useState(client);
  const [open, setOpen] = useState(false);

  const toggleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="hidden sm:flex flex-col justify-between bg-myWhite h-screen md:w-64">
      <div>
        <img
          src={Logo}
          alt=""
          className="w-32 pt-8 ml-14 mb-20 cursor-pointer"
        />

        <aside className="w-64" aria-label="Sidebar">
          <div className="overflow-y-auto py-4 px-3 bg-myWhite rounded">
            {menu.map((item) => (
              <Menu
                name={item.name}
                icon={item.icon}
                subMenu={item.subMenu}
                url={item.url}
                key={item.id}
              />
            ))}
          </div>
        </aside>
      </div>
      <div className="overflow-y-auto py-4 px-3 items-center bg-gray-50 rounded dark:bg-gray-800">
        <Menu
          name="Logout"
          icon={<PowerSettingsNewIcon className="text-myRed" />}
        />
      </div>
    </div>
  );
};

export default SideMenu;
