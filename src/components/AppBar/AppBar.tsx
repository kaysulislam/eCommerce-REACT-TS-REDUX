import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreIcon from '@mui/icons-material/MoreVert';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 200,
        }}
      >
        <Box mt={0.3}>
          <MenuItem
            onClick={handleMenuClose}
            style={{ backgroundColor: '#df851b', color: '#52443b' }}
          >
            <IconButton size="large" aria-label="log in" color="inherit">
              <LoginIcon />
            </IconButton>
            <Link href="/login" style={{ textDecoration: 'none' }}>
              <Button variant="text" style={{ color: '#52443b' }}>
                Log in
              </Button>
            </Link>
          </MenuItem>
        </Box>

        <Box mt={0.3}>
          <MenuItem
            onClick={handleMenuClose}
            style={{ backgroundColor: '#df851b', color: '#52443b' }}
          >
            <IconButton size="large" aria-label="log in" color="inherit">
              <HowToRegIcon />
            </IconButton>
            <Link href="/register" style={{ textDecoration: 'none' }}>
              <Button variant="text" style={{ color: '#52443b' }}>
                Register
              </Button>
            </Link>
          </MenuItem>
        </Box>
      </div>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 200,
        }}
      >
        <Box mt={0.3}>
          <MenuItem style={{ backgroundColor: '#df851b', color: '#52443b' }}>
            <IconButton size="large" aria-label="log in" color="inherit">
              <LoginIcon />
            </IconButton>
            <Link href="/login" style={{ textDecoration: 'none' }}>
              <Button variant="text" style={{ color: '#52443b' }}>
                Log in
              </Button>
            </Link>
          </MenuItem>
        </Box>

        <Box mt={0.3}>
          <MenuItem style={{ backgroundColor: '#df851b', color: '#52443b' }}>
            <IconButton size="large" aria-label="log in" color="inherit">
              <HowToRegIcon />
            </IconButton>
            <Link href="/register" style={{ textDecoration: 'none' }}>
              <Button variant="text" style={{ color: '#52443b' }}>
                Register
              </Button>
            </Link>
          </MenuItem>
        </Box>
      </div>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'rgb(10,25,41)' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ color: '#df851b' }} />
          </IconButton>
          <Link href="/products">
            {' '}
            <Box
              component="img"
              sx={{
                height: 64,
              }}
              alt="logo."
              src={require('../../assets/logo/logo.png').default}
            />
          </Link>

          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: '#df851b' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show cart items"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <ShoppingCartIcon sx={{ color: '#df851b' }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{ color: '#df851b' }} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon sx={{ color: '#df851b' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
