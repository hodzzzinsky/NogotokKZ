import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import './MainBar.css';
import {ImageSlider} from "./ImageSlider.tsx";
import Stack from '@mui/material/Stack';

const drawerWidth = 240;
const navItems = [
    {name: 'О нас', ref: 'about_us'},
    {name: 'Акции', ref: ''},
    {name: 'Наши работы', ref: ''},
    {name: 'Прайс', ref: ''},
    {name: 'Франшиза', ref: ''}
];
const itemData = [
    {
        address: 'ул Пушкина д Колотушкина',
        phone: '+777777771',
        instagram: '@LizDoesBiz'
    },
    {
        address: 'ул Печали д Грусь',
        phone: '+777777771',
        instagram: '@JamiesHotSauce'
    }]; //брать в будующем из бд

const img1 = 'https://i.pinimg.com/564x/ec/99/be/ec99bee494baf10caddd60c4b87f9318.jpg'
const img2 = 'https://i.pinimg.com/564x/19/29/61/1929613ee4049744daa6f6acffb5d99d.jpg'
const img3 = 'https://i.pinimg.com/564x/ff/ca/18/ffca18839f5ab8995e25f08bbb472235.jpg'

const IMAGES = [
    {src: img1, alt: 'img1'},
    {src: img2, alt: 'img2'},
    {src: img3, alt: 'img3'}
];

function DrawerAppBar(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const phoneNumber = process.env.REACT_APP_PHONE_NUMBER
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    const drawer = (
        <Box onClick={handleDrawerToggle}
             sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                MUI
            </Typography>
            <Divider/>
            <List>
                {navItems.map(({name, ref}) => (
                    <ListItem key={name} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText  primary={name}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Box sx={{
                textAlign: 'center',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: 2,

            }}>
                +7 777 777 77 77<br/>
                <div style={{marginTop: '15px'}}>
                    <Button sx={{color: '#939569'}}><TelegramIcon/></Button>
                    <Button sx={{color: '#939569'}}><InstagramIcon/></Button>
                    <Button sx={{color: '#939569'}}><WhatsAppIcon/></Button>
                </div>
            </Box>


        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar component="nav" className="nav-main" sx={{backgroundColor: '#989a6d'}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        Nogotok KZ
                    </Typography>
                    <List sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}>
                        {navItems.map(({name, ref}) => (
                            <Button href={`#${ref}`} key={name} sx={{color: '#fff', fontSize: '10px'}}>
                                {name}
                            </Button>
                        ))}
                    </List>
                    <Box>
                        <List sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}>
                            +7 777 777 77 77 {/*вынести в переменную возможно реакт пока не видет  */}
                            <IconButton sx={{color: '#fff'}}><TelegramIcon fontSize='small'/></IconButton>
                            <IconButton sx={{color: '#fff'}}><InstagramIcon fontSize='small'/></IconButton>
                            <IconButton sx={{color: '#fff'}}><WhatsAppIcon fontSize='small'/></IconButton>
                        </List>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{margin: 'auto'}}>
                <Toolbar/>
                <Box>
                    <img style={{
                        width: '100%',
                        height: '550px',
                        objectFit: 'cover',
                        overflow: 'hidden',
                        p: 0
                    }}
                         src="https://photo-cdn2.icons8.com/GU3GVkXyR8gZBEfXb2JoThawSbPnCLUoTn7lR8DDlGM/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi8wMDdiNzE3YzZk/MmY0MGUzOGM0YzY4/YmM3ZTRkOWUyMi5q/cGc.jpg"
                         className="App-logo" alt="logo"/>
                    <img name='logo1'
                         style={{
                             position: 'absolute',
                             top: '20%',
                             left: '50%',
                             transform: 'translate(-50%, -50%)',
                             width: '200px',
                             height: '200px',
                             objectFit: 'cover',
                             overflow: 'hidden',
                             p: 0,
                         }}
                         src={process.env.PUBLIC_URL + '/logoN.png'} className="App-logo" alt="logo"/>
                    <Button sx={{
                        position: 'absolute',
                        top: '40%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        overflow: 'hidden',
                        p: 0
                    }} variant="contained" size="medium">Онлайн запись</Button>
                </Box>


                <Box sx={{margin: 'auto', width: '50%'}}>

                    <img
                        name='logo1'
                        style={{
                            height: 200,
                            width: 200,
                            objectFit: 'cover',
                        }}
                        src={process.env.PUBLIC_URL + '/logoN.png'}
                        className="App-logo"
                        alt="logo"
                    />
                    <div>
                        <h3 style={{paddingTop: '5rem'}} id='about_us'>O нас</h3>
                        <Typography>Мы создаем уютные условия и предлагаем высококлассный уход 👑, чтобы каждый клиент
                            мог насладиться моментом ухода за собой 💃.</Typography>
                        <h5 style={{paddingTop: '10px'}}>Наша миссия</h5>
                        <Typography>У нас работают опытные мастера маникюра и визажисты, которые следят за последними
                            тенденциями в индустрии красоты 💅.</Typography>
                        <h5 style={{paddingTop: '10px'}}>Наши услуги</h5>
                        <Typography>Мы предлагаем широкий выбор маникюрных услуг, включая классический, европейский,
                            аппаратный маникюр, дизайн ногтей и профессиональный макияж.</Typography>
                    </div>
                </Box>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                {/*филиалы*/}
                <Box className='places'>
                    <Stack
                        direction={{xs: 'column', sm: 'row'}}
                        spacing={{xs: 1, sm: 2, md: 4}}
                    >
                        <ImageSlider images={IMAGES}/>
                        <div className='place-text'>
                            <p className='place-text-address'>ул. Красная Пресня 13</p>
                            <p className='place-text-phone'>Телефон: +77777777777</p>
                            <p className='place-text-inst'>Инстаграм: @LizDoesBiz</p>
                            <Button variant='contained' >Записаться</Button>
                        </div>
                    </Stack>


                </Box>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                Наши работы
                высококласные и тд и тп
                List image
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                Наши самые выгодные
                специальные предложения:
                Абонементы:
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;