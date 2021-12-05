import { Grid, Button, TextField, InputAdornment } from '@mui/material';
import { AccountCircle, LockRounded } from '@material-ui/icons';

export default function Login() {
  return (
    <div>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={6} style={{ minHeight: '100vh' }}>
          <img
            src="https://thumbs.dreamstime.com/b/diet-healthy-food-lifestyle-health-concept-sport-exercise-equipment-workout-and-gym-background-nutrition-detox-salad-f-179855057.jpg"
            alt="brand"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>
        <Grid
          container
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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
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
            <Button variant="contained" color="primary">
              Log In
            </Button>
            <div style={{ height: 20 }} />
            <Button>Don't have an account? Register Here !</Button>
          </div>
          <Grid container justifyContent="center" spacing={2}>
            <Grid>
              <Button>Go to the online store</Button>
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
