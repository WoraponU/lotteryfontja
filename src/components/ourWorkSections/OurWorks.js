import React from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';

import { CardWork } from 'Components/common'
import LiquidCircle from 'Components/common/LiquidCircle';
import { pink, yellow } from 'Components/common/LiquidCircleColor';
import './OurWorks.scss'

const OurWorks = ({ lang: { OurWorks: content } }) => {
  return (
    <div className="OurWorks">
      <Grid>
        <Row>
          <Col lgOffset={4} mdOffset={4} lg={8} md={8} sm={8}>
            <Tabs defaultActiveKey={2} id="Tab">
              <Tab eventKey={1} title={ content.tab.tabAll }></Tab>
              <Tab eventKey={2} title={ content.tab.tabPopular }></Tab>
              <Tab eventKey={3} title={ content.tab.tabPublic }></Tab>
              <Tab eventKey={4} title={ content.tab.tabDesktop }></Tab>
              <Tab eventKey={5} title={ content.tab.tabMoblie }></Tab>
            </Tabs>
          </Col>
        </Row>


        <Row>
          <Col lg={3} md={3} sm={3} className="content">
            <h1 dangerouslySetInnerHTML={{__html: content.header}}></h1>
            <hr/>
            <p>{ content.content }</p>
            <p>{ content.content1 }</p>
            <LiquidCircle id={20} radius={189} color={pink} position={["3px", "63px", "auto", "auto"]}/>      
          </Col>

          <div className="slider">
            <Row>
              <Col lgOffset={4} mdOffset={4} lg={4} md={4} sm={4}>
                <CardWork img='/assets/images/Work/mac5.png' title='MAC-5'/>
              </Col>
              <Col lg={4} md={4} sm={4}>
                <CardWork img='/assets/images/Work/chula.png' title='CHULA'/>            
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={4} sm={4}>
                <CardWork img='/assets/images/Work/mac5.png' title='MAC-5'/>
              </Col>
              <Col lg={4} md={4} sm={4}>
                <CardWork img='/assets/images/Work/chula.png' title='CHULA'/>            
              </Col>
            </Row>
            <Row>
              <Col lgOffset={4} mdOffset={4} lg={4} md={4} sm={4}>
                <CardWork img='/assets/images/Work/mac5.png' title='MAC-5'/>
              </Col>
              <Col lg={4} md={4} sm={4}>
                <CardWork img='/assets/images/Work/chula.png' title='CHULA'/>            
              </Col>
            </Row>
          </div>
        </Row>
      </Grid>
    </div>
  );
};

export default OurWorks;