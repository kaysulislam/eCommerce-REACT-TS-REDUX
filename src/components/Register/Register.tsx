import { Grid, Button, TextField, InputAdornment } from '@mui/material';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default function Register() {
  return (
    <div>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid
          container
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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
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
              label="Multiline"
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
            <Button variant="contained" color="primary">
              Register
            </Button>
            <div style={{ height: 20 }} />
            <Button>Already have an account? Log in Here !</Button>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
}
