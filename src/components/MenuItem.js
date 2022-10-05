import React from 'react';

const MenuItem = ({ name, icon }) => {
  //Menu item will have its own link
  //Menu Item will have its own icon
  //Menu Item will have its own
  return (
    <span className="hover:bg-darkBlueLight py-1 rounded-full pl-8 flex items-center w-4/5">
      <span className="text-buttonBlue text-sm">{icon}</span>
      <span className="pl-3 text-buttonBlue text-sm font-semibold">{name}</span>
    </span>
  );
};

export default MenuItem;
