import { Link } from 'react-router-dom';
import { Grid, Button, TextField, InputAdornment } from '@mui/material';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import LoginIcon from '@mui/icons-material/Login';

export default function LogInEmail() {
  return (
    <div>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={6} style={{ minHeight: '100vh' }}>
          <img
            src={require('../../assets/login-page-email.jpeg').default}
            alt="brand"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justifyContent="space-between"
          style={{ padding: '10px' }}
        >
          <div />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 400,
              minWidth: 300,
            }}
          >
            <Grid item justifyContent="center">
              <img
                src={require('../../assets/logo/logo.png').default}
                alt="logo"
                width={200}
              />
            </Grid>
            <TextField
              label="Username"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type="password"
              label="Password"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockRounded />
                  </InputAdornment>
                ),
              }}
            />
            <div style={{ height: 20 }} />

            <Button
              variant="contained"
              startIcon={<LoginIcon />}
              style={{ backgroundColor: '#df851b', color: '#52443b' }}
            >
              Log In
            </Button>

            <div style={{ height: 20 }} />
            <Link to={'/register'} style={{ textDecoration: 'none' }}>
              <Button color="primary" variant="text">
                Don't have an account? Register Here !
              </Button>
            </Link>
          </div>
          <Grid container justifyContent="center" spacing={2}>
            <Grid>
              <Link to={'/products'} style={{ textDecoration: 'none' }}>
                <Button variant="text" color="primary">
                  Go to the online store
                </Button>
              </Link>
            </Grid>
            <Grid>
              <Button variant="outlined">Forgot Password?</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
