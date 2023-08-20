import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
// import Recipt from './accounts/recipt';
import SideItem from './components/listitem/SideItem';
import Recipt from './components/accounts/recipt';
import TranslateIcon from '@mui/icons-material/Translate';
import SmlCustomBtn from './components/custom/widget';
import profileImage from './assets/images/profile.jpg';
import { Fab } from '@mui/material';
import { Headphones } from '@mui/icons-material';
import MlaTable from './components/accounts/mla';
import i18n from './i18n';
// import { useTranslation } from 'react-i18next';

const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(2),
        transition: theme.transitions.create('margin', { easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.leavingScreen, }),
        // Use media query for screen width less than 800px
        marginLeft: `-${drawerWidth}px`,
        ...(open && { transition: theme.transitions.create('margin', { easing: theme.transitions.easing.easeOut, duration: theme.transitions.duration.enteringScreen, }), marginLeft: 0 }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], { easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.leavingScreen, }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], { easing: theme.transitions.easing.easeOut, duration: theme.transitions.duration.enteringScreen, }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Dashboard() {
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [menudata, setMenudata] = useState('');

    // for language change handling 
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng); // Store the selected language
    };

    const handleRecipt = () => {
        setMenudata('acntrecipt');
    };

    const handleMla = () => {
        setMenudata('mlatable');
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    // for profile handling
    const [anchorEl, setAnchorEl] = useState(null);
    const openprofile = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const [anchorlng, setAnchorlng] = useState(null);
    const openlng = Boolean(anchorlng);
    const handleClicklng = (event) => {
        setAnchorlng(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setAnchorlng(null);
    };

    return (
        <Box sx={{ display: 'flex', }}>
            <CssBaseline />

            <AppBar position="fixed" open={open} sx={{ background: 'white', color: 'black', boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.2)' }}>
                <Toolbar sx={{
                    [theme.breakpoints.up('sm')]: {
                        paddingLeft: 2,
                        paddingRight: 2,
                    },
                }}
                >

                    <SmlCustomBtn
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ background: '#ede7f6', color: '#734bc9', ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </SmlCustomBtn>


                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { md: 'flex' } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                            <Tooltip title="Language change"
                                id="basic-button"
                                aria-controls={openlng ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openlng ? 'true' : undefined}
                                onClick={handleClicklng}
                                sx={{ marginRight: 1 }}
                            >
                                <SmlCustomBtn >
                                    <TranslateIcon fontSize="small" />
                                </SmlCustomBtn>
                            </Tooltip>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorlng}
                                open={openlng}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                sx={{ mt: 1 }}
                            >
                                <MenuItem onClick={() => changeLanguage('en')}>English (UK)</MenuItem>
                                <MenuItem onClick={() => changeLanguage('bn')}>বাংলা (Bengali)</MenuItem>
                                <MenuItem onClick={() => changeLanguage('ar')}>العربية (Arabic)</MenuItem>
                            </Menu>

                            <Tooltip title="Profile settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    aria-controls={openprofile ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openprofile ? 'true' : undefined}
                                    sx={{ border: '1px solid grey', borderRadius: '50px' }}

                                >
                                    <Avatar alt="Remy Sharp"
                                        src={profileImage}
                                        sx={{ width: 32, height: 32 }}
                                    />
                                </IconButton>
                            </Tooltip>
                        </Box>

                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={openprofile}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Avatar /> Profile
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Avatar /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                Add another account
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            <div>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            borderRight: '0px',
                            position: 'fixed',
                            boxShadow: '1px 0px 1px rgba(0, 0, 0, 0.2)',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <Typography variant="h4" sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            Admin
                        </Typography>
                        <IconButton color="primary" sx={{ background: '#ede7f6', color: 'blue' }} onClick={handleDrawerClose}>
                            <CloseIcon>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </CloseIcon>
                        </IconButton>
                    </DrawerHeader>
                    <SideItem handleRecipt={handleRecipt} handleMla={handleMla} />
                    <Divider />

                    <Fab variant="extended" sx={{ mx: 3, position: 'fixed', bottom: 10, background: 'white', color: '#00008B' }}>
                        <Headphones fontSize='large' sx={{ mx: 1 }} />
                        Need help ?
                    </Fab>
                </Drawer>
            </div>
            <Main open={open}>
                <DrawerHeader />
                <div>
                    {menudata === 'acntrecipt' && <Recipt />}
                    {menudata === 'mlatable' && <MlaTable />}
                </div>
            </Main>
        </Box >
    );
}
