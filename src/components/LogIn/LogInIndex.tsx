import { Link } from 'react-router-dom';
import { Grid, Button } from '@mui/material';

import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';

export default function LogInIndex() {
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
            <div style={{ height: 20 }} />
            <div>
              <Link to={'/login/google'} style={{ textDecoration: 'none' }}>
                <Button
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  color="primary"
                  style={{
                    width: 300,
                    backgroundColor: '#df851b',
                    color: '#52443b',
                  }}
                >
                  Log In with Google
                </Button>
              </Link>
              <div style={{ height: 20 }} />
              <Link to={'/login/email'} style={{ textDecoration: 'none' }}>
                <Button
                  variant="outlined"
                  startIcon={<EmailIcon />}
                  color="primary"
                  style={{
                    width: 300,
                    backgroundColor: '#df851b',
                    color: '#52443b',
                  }}
                >
                  Log In with Email
                </Button>
              </Link>
            </div>

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
