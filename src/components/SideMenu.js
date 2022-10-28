import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { client, admin, supervisor } from '../assets/MenuData';

import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { removeUserDetails } from '../features/user/userSlice';
import { confirmedSupervisor } from '../features/staff/supervisorConfirmSlice';
import { useAuthState } from 'react-firebase-hooks/auth';

const SideMenu = () => {
  const [menu, setMenu] = useState([{}]);
  const user = useSelector((state) => state.user);
  const loggedInUser = useAuthState(auth);

  const isSupervisor = useSelector(
    (state) => state.supervisorConfirmed.isSupervisor,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.role === 'admin') {
      setMenu(admin);
    } else if (user.role === 'supervisor') {
      setMenu(supervisor);
    } else if (user.role === 'client') {
      setMenu(client);
    } else {
      return;
    }
  }, [user]);

  const logoutUser = () => {
    dispatch(removeUserDetails());
    dispatch(confirmedSupervisor({ isSupervisor: false }));
    signOut(auth);
    navigate('/');
  };

  return (
    <div className="hidden sm:flex flex-col justify-between bg-myDarkBlue h-screen md:w-56">
      <aside
        className="w-full h-4/5 p-5 mt-28 flex flex-col justify-between "
        aria-label="Sidebar"
      >
        <span>
          {menu.map((item) => (
            <span key={item.id}>
              <Menu
                name={item.name}
                icon={item.icon}
                subMenu={item.subMenu}
                url={item.url}
                key={item.id}
              />
            </span>
          ))}
        </span>
        <span onClick={logoutUser}>
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
