import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../../images/logos/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const { user, handleSignOut } = useAuth();

    const navigate = useNavigate();

    return (
        <>
            <AppBar position="static">
                <Container >
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <Link style={{ textDecoration: 'none' }} to="/"><img style={{ width: '100%', height: '50px' }} src={logo} alt="" /></Link>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"> Home </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"> Our Portfolio </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"> Our Team </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"> Contact Us </Typography>
                                </MenuItem>
                                {user?.email ? <MenuItem onClick={() => {handleCloseNavMenu(); handleSignOut()}}>
                                    <Typography textAlign="center"> Log Out </Typography>
                                </MenuItem> :
                                <MenuItem onClick={() => {handleCloseNavMenu();navigate('/login/')}}>
                                    <Typography textAlign="center"> Log In </Typography>
                                </MenuItem>}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <Link style={{ textDecoration: 'none' }} to="/"><img style={{ width: '100%', height: '50px' }} src={logo} alt="" /></Link>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block', }}
                            >
                                Home
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block', }}
                            >
                                Our Portfolio
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block', }}
                            >
                                Our Team
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block', }}
                            >
                                Contact Us
                            </Button>
                            {user?.email ? 
                            <Button
                                onClick={() => {handleCloseNavMenu();handleSignOut()}}
                                sx={{ my: 2, color: 'black', display: 'block', }}
                            >
                                Log Out
                            </Button> : 
                            
                            <Button
                                onClick={() => {handleCloseNavMenu();navigate('/login/')}}
                                sx={{ my: 2, color: 'black', display: 'block', }}
                            >
                                Log In
                            </Button>}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>

                            <IconButton sx={{ p: 0 }}>
                                {user? <Avatar alt="Remy Sharp" src={user?.img} /> : ''}
                            </IconButton>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Navbar;