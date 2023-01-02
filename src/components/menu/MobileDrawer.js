import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { client, admin, supervisor } from '../../assets/MenuData';
import Menu from '../Menu';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { removeUserDetails } from '../../features/user/userSlice';
import { confirmedSupervisor } from '../../features/staff/supervisorConfirmSlice';
import { auth } from '../../utils/firebase';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light'
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function MobileDrawer(props) {
  const [menu, setMenu] = React.useState([{}]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(removeUserDetails());
    dispatch(confirmedSupervisor({ isSupervisor: false }));
    signOut(auth);
    navigate('/');
  };

  React.useEffect(() => {
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

  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />

      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        ></StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
            backgroundColor: '#0B0B46',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <List>
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
          </List>
          <span onClick={logoutUser}>
            <Menu
              name="Logout"
              icon={<PowerSettingsNewIcon className="text-myRed" />}
            />
          </span>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

MobileDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MobileDrawer;
