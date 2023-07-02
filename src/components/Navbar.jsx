import React, { useState } from 'react'
import {Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png'

export default function Navbar() {
    const [navbarDisplay, setNavbarDisplay] = useState('false');
    const displayNavbar = () =>{
        if(navbarDisplay == 'false') setNavbarDisplay('true');
        else setNavbarDisplay('false');
    }

  return (
    <div className="nav-container">
        <div className='logo-container'>
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className="logo">
                <Link to='/'>Cryptoverse</Link>
            </Typography.Title>
            <MenuOutlined className='hamburger-button' onClick={displayNavbar}/>
        </div>
        <Menu theme="dark" className={navbarDisplay=='false'? 'nav-menu':''}>
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined/>}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
                <Link to="/news">News</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}
