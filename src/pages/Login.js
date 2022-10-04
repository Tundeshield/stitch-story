import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img from '../assets/images/Logo.png';
import sewingMachine from '../assets/images/cloth.jpg';
import { Link } from 'react-router-dom';
import Copyright from '../components/Copyright';
import { ErrorAlert } from '../components/Feedback';

const theme = createTheme();

export default function LogIn() {
  const [authorized, setAuthorized] = useState(false);

  //Handle login function
  const handleSignInLink = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
    });

    //Find user password in database
    //If data not seen in DB return error
    //Else send login link to email
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
            <img src={img} alt="" className="w-52 py-7" />

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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send Sign-in link
              </Button>
              {!authorized && (
                <ErrorAlert>
                  Unauthorized user, contact production team!
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
