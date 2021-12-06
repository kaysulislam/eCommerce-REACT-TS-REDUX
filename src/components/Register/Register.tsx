import { Link } from 'react-router-dom';
import { Grid, Button, TextField, InputAdornment } from '@mui/material';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export default function Register() {
  return (
    <div>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid
          container
          item
          xs={12}
          sm={12}
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
              label="First Name"
              margin="normal"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Last Name"
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
              label="Email"
              required
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Address"
              margin="normal"
              multiline
              rows={2}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HomeRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type="password"
              required
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
            <TextField
              type="password"
              required
              label="Confirm Password"
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
              startIcon={<HowToRegIcon />}
              style={{ backgroundColor: '#df851b', color: '#52443b' }}
            >
              Register
            </Button>

            <div style={{ height: 20 }} />
            <Link to={'/login'} style={{ textDecoration: 'none' }}>
              <Button color="primary" variant="text">
                Already have an account? Log in Here !
              </Button>
            </Link>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
}
