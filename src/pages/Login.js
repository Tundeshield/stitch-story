import { useEffect, useState } from 'react';
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
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, app, timestamp } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import useAuthClaims from '../hooks/useAuthClaims';
import { useDispatch, useSelector } from 'react-redux';
import { logUserDetails } from '../features/user/userSlice';
import { signOut } from 'firebase/auth';
import { Timestamp } from 'firebase/firestore';

const theme = createTheme();

export default function LogIn() {
  const [user, loading] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState();
  const [error, setError] = useState('');
  const [dispatchedUser, setDispatchedUser] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.user.isAdmin);

  //Handle login function
  const handleSignInLink = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        auth.onAuthStateChanged((loggedinuser) => {
          loggedinuser.getIdTokenResult().then((idTokenResult) => {
            setIsAdmin(idTokenResult.claims.admin);
            let loggedinuser = user.user;
            let adminClaim = idTokenResult.claims.admin;
            if (adminClaim) {
              loggedinuser.admin = idTokenResult.claims.admin;
            } else {
              loggedinuser.admin = false;
            }
            // Add the user details to redux
            dispatch(
              logUserDetails({
                displayName: loggedinuser.displayName,
                email: loggedinuser.email,
                isAdmin: loggedinuser.admin,
                uid: loggedinuser.uid,
              }),
            );
            loggedinuser.admin ? navigate('/users') : navigate('/orders');
          });
        });
      })
      .catch((error) => {
        setError(error.message);
      });

    //check auth state of user if admin, redirect to admin routes, is client, redirect to client routes
    //Check user auth to redirect
  };

  console.log(Timestamp.now());

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
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

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={img} alt="" className="w-96 py-7" />

            <Typography component="h4" variant="h6" className="text-blue-900">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSignInLink}
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
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                name="password"
                autoComplete="current-password"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign in
              </Button>
              {error && (
                <ErrorAlert>
                  Unauthorized user, contact production team!
                </ErrorAlert>
              )}
              {user && (
                <h1>
                  there is a user {user.email} and {isAdmin}
                </h1>
              )}

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
