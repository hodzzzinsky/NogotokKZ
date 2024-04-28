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
import {ImageList, ImageListItem, ImageListItemBar} from "@mui/material";

const drawerWidth = 240;
const navItems = [
    {name: 'О нас', ref: 'about_us'},
    {name: 'Акции', ref: ''},
    {name: 'Наши работы', ref: 'performance'},
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
                        <ListItemButton href={`#${ref}`} sx={{textAlign: 'center'}}>
                            <ListItemText primary={name}/>
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
            <Box sx={{m: 'auto'}}>
                <Toolbar/>
                {/*<Box className='landing-image-box'>*/}
                {/*    <div className='landing-image'>*/}
                {/*        <img style={{*/}
                {/*            objectFit: 'cover',*/}
                {/*            width: '100%',*/}
                {/*            height: '100%',*/}
                {/*            display: 'block',*/}
                {/*            flexShrink: 0,*/}
                {/*            flexGrow: 0,*/}
                {/*            overflow: 'hidden',*/}
                {/*            p: 0*/}
                {/*        }}*/}
                {/*             src={process.env.PUBLIC_URL + '/landing.jpg'}*/}
                {/*             className="App-logo" alt="logo"/>*/}
                {/*    </div>*/}

                {/*    <img name='logo1'*/}
                {/*         style={{*/}
                {/*             position: 'absolute',*/}
                {/*             top: '20%',*/}
                {/*             left: '50%',*/}
                {/*             transform: 'translate(-50%, -50%)',*/}
                {/*             width: '200px',*/}
                {/*             height: '200px',*/}
                {/*             objectFit: 'cover',*/}
                {/*             overflow: 'hidden',*/}
                {/*             p: 0,*/}
                {/*         }}*/}
                {/*         src={process.env.PUBLIC_URL + '/logoN.png'} className="App-logo" alt="logo"/>*/}
                {/*    <Button className='sign-up-button' sx={{*/}
                {/*        background: '#939569',*/}
                {/*        position: 'absolute',*/}
                {/*        top: '40%',*/}
                {/*        left: '50%',*/}
                {/*        transform: 'translate(-50%, -50%)',*/}
                {/*        overflow: 'hidden',*/}
                {/*        p: 0*/}
                {/*    }} variant="contained" size="medium">Онлайн запись</Button>*/}
                {/*</Box>*/}


                <Box className='about-us-box' id='about_us'>
                    <div className='stacked-images'>
                        <img
                            className="logo1"
                            name='logo1'
                            src={img1}
                            alt="logo"
                        />
                        {/*<img*/}
                        {/*    className="logo2"*/}
                        {/*    name='logo2'*/}

                        {/*    src={img2}*/}
                        {/*    alt="logo"*/}
                        {/*/>*/}
                        {/*<img*/}
                        {/*    className="logo3"*/}
                        {/*    name='logo3'*/}

                        {/*    src={img3}*/}
                        {/*    alt="logo"*/}
                        {/*/>*/}
                    </div>
                    <div style={{width: '20rem'}}>
                        <h3 className='about_us_title'>O нас</h3>
                        <p>Мы создаем уютные условия и предлагаем высококлассный уход 👑, чтобы каждый клиент
                            мог насладиться моментом ухода за собой 💃.</p>
                        <h5 style={{paddingTop: '10px'}}>Наша миссия</h5>
                        <p>У нас работают опытные мастера маникюра и визажисты, которые следят за последними
                            тенденциями в индустрии красоты 💅.</p>
                        <h5 style={{paddingTop: '10px'}}>Наши услуги</h5>
                        <p>Мы предлагаем широкий выбор маникюрных услуг, включая классический, европейский,
                            аппаратный маникюр, дизайн ногтей и профессиональный макияж.</p>
                    </div>

                </Box>


                {/*филиалы*/}
                <Box>
                    <div className='places-box'>
                        <h1>Наши филиалы</h1>
                        <Box className='places'>
                            <div style={{paddingBottom: '3.5rem'}}>
                                <ImageSlider images={IMAGES}/>
                            </div>
                            <div>
                                <div className='place-text'>
                                    <p className='place-text-address'>ул. Красная Пресня 13</p>
                                    <p className='place-text-phone'>Телефон: +77777777777</p>
                                    <p className='place-text-inst'>Инстаграм: @LizDoesBiz</p>
                                    <Button color='inherit' className='sign-up-button' sx={{background: '#939569'}}
                                            variant='contained'>Записаться</Button>
                                </div>
                            </div>
                        </Box>
                    </div>
                </Box>


                <Box className='performance-box' id='performance'>
                    <p className='performance-title'>Наши работы</p>
                    <p className='performance-text'>Высококлассные мастера, реализуют все ваши пожелания</p>
                    <p className='performance-text'>и самые яркие идеи в лучшем виде</p>
                    <Box sx={{width: '100%'}}>
                        <ImageList sx={{width: '100%', paddingBottom: '3rem'}} cols={4}>
                            {imagesPerf.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img style={{maxHeight: '25rem'}}
                                         srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                         src={`${item.img}?w=248&fit=crop&auto=format`}
                                         alt={item.title}
                                         loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                    <div className='performance-links'>
                        <p>
                            Понаблюдать за нами и посмотреть больше работ,
                        </p>
                        <p>
                            вы можете в наших соц.сетях
                        </p>
                        <div style={{paddingBottom: '5rem'}}>
                            <IconButton sx={{color: '#939569', pr: '2rem'}}><TelegramIcon
                                fontSize='large'/></IconButton>
                            <IconButton sx={{color: '#939569', pl: '2rem'}}><InstagramIcon
                                fontSize='large'/></IconButton>
                        </div>
                    </div>
                </Box>


                <Box className='ad-block'>
                    <div style={{paddingTop: '5rem'}}>
                        <p className='ad-block-title'>Наши самые выгодные</p>
                        <p className='ad-block-title'>специальные предложения:</p>
                        <p className='ad-block-disc'>Абонементы:</p>
                    </div>
                    <Box>

                    </Box>


                </Box>

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

const imagesPerf = [
    {
        img: 'https://optim.tildacdn.com/tild3764-6563-4831-b065-393535626361/-/format/webp/IMG_6598.JPG',
        title: 'Books',
    },
    {
        img: 'https://static.tildacdn.com/tild6666-6136-4662-b430-623465366665/-2.jpg',
        title: 'Sink',
    },
    {
        img: 'https://static.tildacdn.com/tild3132-6236-4332-a662-383834663337/IMG_1509.JPG',
        title: 'Kitchen',
    },
    {
        img: 'https://static.tildacdn.com/tild3564-6538-4363-a638-373266303664/IMG_6597.JPG',
        title: 'Blinds',
    },
    {
        img: 'https://static.tildacdn.com/tild6139-6434-4530-a163-663636616232/___Shdema_Haviv_____.jpg',
        title: 'Chairs',
    },
    {
        img: 'https://static.tildacdn.com/tild3063-6136-4531-a339-396331643461/IMG_8231.jpg',
        title: 'Laptop',
    },
    {
        img: 'https://static.tildacdn.com/tild6438-6531-4537-a565-316161666161/f6cc598e-85b3-4ec2-a.JPG',
        title: 'Doors',
    },
    {
        img: 'https://static.tildacdn.com/tild6464-6362-4561-b434-313163633437/IMG_8230.jpg',
        title: 'Coffee',
    },
    {
        img: 'https://static.tildacdn.com/tild3361-6362-4961-a166-656131373333/IMG_1472.JPG',
        title: 'Storage',
    },
    {
        img: 'https://static.tildacdn.com/tild6666-6136-4662-b430-623465366665/-2.jpg',
        title: 'Candle',
    },
    {
        img: 'https://static.tildacdn.com/tild3861-6438-4936-a135-656338656633/IMG_7942.JPG',
        title: 'Coffee table',
    },
    {
        img: 'https://optim.tildacdn.com/tild6139-6434-4530-a163-663636616232/-/format/webp/___Shdema_Haviv_____.jpg',
        title: 'Coffee',
    },
];


const discountData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Сертификаты для друзей 0 р',
        disc: '@bkristastucchio',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Акция готовится, следите за обновлениями',
        disc: '@rollelflex_graphy726',
    }
];

const adviceData = [
    {
        img: 'https://optim.tildacdn.com/tild6330-3666-4932-b532-396638396435/-/resize/460x/-/format/webp/photo_2022-08-13_112.jpeg',
        title: 'Акция готовится, следите за обновлениями',
        disc: '@bkristastucchio',
    },
    {
        img: 'https://optim.tildacdn.com/tild6234-6161-4738-a439-373631653232/-/resize/460x/-/format/webp/IMG_7943.JPG',
        title: 'Акция: скидка в день рождения 15% на ВСЕ услуги',
        disc: '@rollelflex_graphy726',
    }
];