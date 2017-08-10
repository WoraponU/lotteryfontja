import React from 'react';
import { Grid, Image, Col, Row, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import { withRouter } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';

import LiquidCircle from 'Components/common/LiquidCircle';
import { blue } from 'Components/common/LiquidCircleColor';
import { Card } from 'Components/common'
import './Section6.scss'

const Section6 = ({ lang: { section6: content }, match: { params: { id, lang } } }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: false,
    swipeToSlide: false,
    lazyLoad: false,
    responsive: [
       {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, 
          // slidesToScroll: 1, 
          arrows: true,
          dots: false,
          variableWidth: true,
          adaptiveHeight: false,
          wipeToSlide: false
        }
      }
    ]
  };
  
  return (
    <div className="section6">
      <Grid className="text-center LiquidCircle xsHidden smHidden" >
        <Col xsHidden smHidden>
          <LiquidCircle id={10} radius={300} color={blue} position={["-250px", "auto", "auto", "20px"]}/>
          <LiquidCircle id={16} radius={180} color={blue} position={["auto", "276px", "-109px", "auto"]}/>
        </Col>
        <Image src="/assets/images/Home/section6/line.png"/>
        <h1 dangerouslySetInnerHTML={{__html: content.header}}></h1>
      </Grid>
      <Grid >
        <Slider {...settings}>  
          <div>
            <Card 
              read={content.read}
              img='/assets/images/Home/section6/card1.png' 
              title='How to make nacho and taco like a pro!' 
              subTittle='lab'
              content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>
          </div>         
          <div>
            <Card 
              read={content.read}
              img='/assets/images/Home/section6/card1.png' 
              title='How to make nacho and taco like a pro!' 
              subTittle='lab'
              content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>
          </div> 
          <div>
            <Card 
              read={content.read}
              img='/assets/images/Home/section6/card2.png' 
              title='How to make nacho and taco like a pro!' 
              subTittle='resources'
              content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>
          </div>         
          <div>
            <Card 
              read={content.read}
              img='/assets/images/Home/section6/card1.png' 
              title='How to make nacho and taco like a pro!' 
              subTittle='news &amp; updates'
              content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>
          </div>         
          
                       
        </Slider>
        <Row>
          <Col lgHidden mdHidden className="text-center">
            <LinkContainer  to={`/${lang}/our-work`} className="btn-black mt10"><Button >{content.button}</Button></LinkContainer>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default withRouter(Section6);