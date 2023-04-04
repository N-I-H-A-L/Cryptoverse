import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Layout, Typography, Space } from 'antd';

import './App.css'

import {Navbar, Homepage, Exchanges, Cryptocurrencies, News, CryptoDetails} from './components';

export default function App() {
  return (
    <div className='app'>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
{/* exact keyword says it will open the component inside it if and only if the path is exactly equal to '/' */}
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>} />

              {/* Colon specifies that the address will be dynamic, e.g. /crypto/123, /crypto/xyz, etc. */}
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes> 
          </div>
        </Layout>

        <div className='footer'>
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}> 
            Cryptoverse <br/>
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}
