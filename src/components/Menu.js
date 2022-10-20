import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link, NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

const Menu = ({ name, icon, subMenu, url }) => {
  const [open, setOpen] = useState(false);

  return (
    <ul>
      <li>
        <Link to={url}>
          <button
            type="button"
            className="flex items-center p-2 w-full border border-myBlue mb-4 text-base font-normal rounded-full transition duration-75 group hover:bg-myBlue dark:text-white dark:hover:bg-gray-700"
          >
            {icon}
            <span
              className="flex-1 ml-3 text-left whitespace-nowrap text-white "
              sidebar-toggle-item=""
            >
              {name}
            </span>
            {subMenu && (
              <KeyboardArrowUpIcon
                fontSize="xs"
                onClick={() => setOpen(!open)}
                className={`transition duration-300 text-white  ${
                  !open && ' rotate-180'
                }`}
              />
            )}
          </button>
        </Link>
      </li>
      {subMenu && open && (
        <React.Fragment>
          {subMenu.map((item) => (
            <ul className="py-2 space-y-2">
              <li>
                <Link
                  to={item.url}
                  className="flex items-center justify-around p-2 pl-4 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-myBlue dark:text-white dark:hover:bg-gray-700"
                >
                  <span className="text-buttonBlue text-sm">{item.icon}</span>
                  <span className="pl-3 text-white text-xs font-semibold mr-2">
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
