import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const MenuItem = ({ name, icon, subMenu }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span
        className="flex items-center hover:bg-darkBlueLight py-1 rounded-full px-8  w-4/5"
        onClick={() => setOpen(!open)}
      >
        <span className={`text-buttonBlue text-sm `}>{icon}</span>
        <span className="pl-3 text-buttonBlue text-sm font-semibold">
          {name}
        </span>
        {subMenu && (
          <KeyboardArrowUpIcon
            className={`transition duration-300 text-buttonBlue text-sm ml-2 mr-2 ${
              !open && ' rotate-180'
            }`}
          />
        )}
      </span>

      {/*If submenu exists, render submenu as list also*/}
      {subMenu && open && (
        <React.Fragment>
          {subMenu.map((item) => (
            <span className="flex bg-blend-lighten py-1 mt-2 rounded-full pl-8 items-center w-4/5">
              <span className="text-buttonBlue text-sm">{item.icon}</span>
              <span className="pl-3 text-buttonBlue text-xs font-semibold mr-2">
                {item.name}
              </span>
            </span>
          ))}
        </React.Fragment>
      )}
    </>
  );
};

export default MenuItem;
