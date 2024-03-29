import { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img from '../assets/images/loginLogo.png';
import sewingMachine from '../assets/images/cloth.jpg';
import { Link } from 'react-router-dom';
import Copyright from '../components/Copyright';
import { ErrorAlert } from '../components/Feedback';
import { auth, app, timestamp, db } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logUserDetails } from '../features/user/userSlice';
import { doc, getDoc, Timestamp } from 'firebase/firestore';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import HelpIcon from '@mui/icons-material/Help';
import TaskModal from '../components/TaskModal';

const theme = createTheme();

export default function LogIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const defaultEmail = 'admin@stitchstory.com';

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = process.env.REACT_APP_PASS;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const userRef = doc(db, 'users', user.uid);

        getDoc(userRef).then((doc) => {
          if (doc.exists()) {
            const userData = doc.data();
            dispatch(
              logUserDetails({
                uid: user.uid,
                email: user.email,
                role: doc.data().role,
                fullName: doc.data().firstName + ' ' + doc.data().lastName,
              }),
            );
            if (doc.data().role === 'admin') {
              navigate('/projects');
            } else if (doc.data().role === 'supervisor') {
              navigate('/staff/staff-tasks');
            } else if (doc.data().role === 'client') {
              navigate('/orders');
            }
          } else {
            navigate('/');
            console.log('No such document!');
          }
        });
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }} className="">
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${sewingMachine})`,
            backgroundRepeat: 'no-repeat',
            opacity: 0.7,
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <TaskModal
          handleClose={handleClose}
          open={open}
          title="Use any of the test login emails to view dashboard"
        >
          <Box>
            <Typography>
              <p className="font-bold">Production Manager:</p>{' '}
              admin@stitchstory.com
            </Typography>

            <Typography>
              <p className="font-bold">Client:</p> client@stitchstory.co.uk
            </Typography>
          </Box>
        </TaskModal>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <p onClick={handleOpen} className="cursor-pointer">
            <div className="flex justify-end">
              <div
                id="toast-simple"
                class="flex items-center p-4 space-x-4 max-w-xs text-myBlue bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
                role="alert"
              >
                <span className="animate-bounce">
                  <HelpIcon />
                </span>

                <Typography variant="h6" component="p">
                  Get Test Email Details
                </Typography>
              </div>
            </div>
          </p>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={img} alt="" className=" md:w-96 py-7" />
            <Typography component="h4" variant="h6" className="text-blue-900">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleLogin}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                defaultValue={defaultEmail}
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                label="Test password already inputed, click SIGN IN"
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="Default password already inputed, just click SIGN IN."
                disabled
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign in
              </Button>

              <div className="flex flex-col md:flex justify-between">
                <Link to="/register" className="mb-4">
                  <div className="flex justify-center">
                    <div
                      id="toast-simple"
                      class="flex items-center p-4 space-x-4 w-full max-w-xs text-myBlue bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
                      role="alert"
                    >
                      <AssuredWorkloadIcon />
                      <div class="pl-4 text-sm font-normal">
                        New Client? Register here...
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/StaffConfirmation">
                  <div className="flex justify-center">
                    <div
                      id="toast-simple"
                      class="flex items-center p-4 space-x-4 w-full max-w-xs text-myBlue bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
                      role="alert"
                    >
                      <AddModeratorIcon />
                      <div class="pl-4 text-sm font-normal">
                        New staff only ...
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              {error && (
                <ErrorAlert>
                  Unauthorized user, contact production team! or check your
                  login details.
                </ErrorAlert>
              )}

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
