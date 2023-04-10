import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img from '../../assets/images/loginLogo.png';
import tailor from '../../assets/images/tailor.jpg';
import Copyright from '../../components/Copyright';
import { ErrorAlert } from '../../components/Feedback';
import { auth } from '../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { confirmedSupervisor } from '../../features/staff/supervisorConfirmSlice';

const theme = createTheme();
const StaffConfirmationPage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.user.isAdmin);

  const handleConfirmCode = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const code = data.get('securityCode');

    if (code !== process.env.REACT_APP_SUPERVISOR_SECRET_PASS) {
      setError('Security code is incorrect');
      dispatch(confirmedSupervisor({ isSupervisor: false }));
      return;
    }

    dispatch(confirmedSupervisor({ isSupervisor: true }));
    navigate('/staff/secret-registration');
  };
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
            backgroundImage: `url(${tailor})`,
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
              Enter Staff Security Code
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleConfirmCode}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="securityCode"
                label="Security Code"
                name="securityCode"
                autoComplete="securityCode"
                autoFocus
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Confirm Security Code
              </Button>
              {error && (
                <ErrorAlert>
                  Unauthorized user, contact production manager to get your
                  passcode!
                </ErrorAlert>
              )}

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default StaffConfirmationPage;
