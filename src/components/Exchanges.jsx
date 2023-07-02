import React from 'react'
import { useGetExchangesQuery } from '../services/cryptoAPI';
import { Row, Col, Avatar, Typography, Collapse } from 'antd';
import millify from 'millify';

export default function Exchanges() {
  const {data, isFetching} = useGetExchangesQuery();
  if(isFetching) return 'Loading...';
  
  const exchanges = data.data.exchanges;
  console.log(exchanges);

  const { Panel } = Collapse;

  return (
    <>
      <Row gutter={[24,24]}>
        <Col span={6}>Exchange</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Price</Col>
      </Row>
      {exchanges.map((exchange, i)=>(
        <Row gutter={[32,32]} className='exchange-row'>
          <Col span={6}><Typography style={{fontWeight: '500'}}>{i+1}. <img className='exchange-logo' src={exchange.iconUrl}/> {exchange.name}</Typography></Col>
          <Col span={6}><Panel showArrow={false} header=''></Panel></Col>
          <Col span={6}><Typography>{millify(exchange['24hVolume'])}</Typography></Col>
          <Col span={6}><Typography>{millify(exchange.price)}</Typography></Col>
        </Row>
      ))}
    </>
  )
}
