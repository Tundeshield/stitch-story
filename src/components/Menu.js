import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link, NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

const Menu = ({ name, icon, subMenu, url }) => {
  const [open, setOpen] = useState(false);

  return (
    <ul class="space-y-2">
      <li>
        <button
          type="button"
          className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          aria-controls="dropdown-example"
          data-collapse-toggle="dropdown-example"
        >
          {icon}
          <span
            className="flex-1 ml-3 text-left whitespace-nowrap"
            sidebar-toggle-item=""
          >
            {name}
          </span>
          {subMenu && (
            <IconButton onClick={() => setOpen(!open)}>
              <KeyboardArrowUpIcon
                className={`transition duration-300 ${!open && ' rotate-180'}`}
              />
            </IconButton>
          )}
        </button>
      </li>
      {subMenu && open && (
        <React.Fragment>
          {subMenu.map((item) => (
            <ul className="py-2 space-y-2">
              <li>
                <Link
                  to={item.url}
                  className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <span className="text-buttonBlue text-sm">{item.icon}</span>
                  <span className="pl-3 text-buttonBlue text-xs font-semibold mr-2">
                    {item.name}
                  </span>
                </Link>
              </li>
            </ul>
          ))}
        </React.Fragment>
      )}
    </ul>
  );
};

export default Menu;
