import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import { client, manager, supervisor } from './Menus';
import Logo from '../assets/images/stitch story.png';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const SideMenu = () => {
  const [menu, setMenu] = useState(manager);

  return (
    <div className="hidden sm:flex flex-col justify-between bg-darkBlue h-screen md:w-60">
      <div>
        <img src={Logo} alt="" className="w-32 pt-8 ml-14 cursor-pointer" />
        <ul className="flex flex-col justify-center items-center mt-20">
          {menu.map((item) => (
            <li
              key={item.id}
              className="w-full flex items-center justify-center mb-4 cursor-pointer"
            >
              <MenuItem name={item.name} icon={item.icon} />
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full flex items-center justify-center mb-4 cursor-pointer pb-8">
        <MenuItem
          name="Logout"
          icon={<PowerSettingsNewIcon className="text-red" />}
        />
      </div>
    </div>
  );
};

export default SideMenu;
