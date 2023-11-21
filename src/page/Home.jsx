import React from 'react'
import { HomeMainContainer, Bot } from "../styles/pages/Home";
import HomeTop from '../components/page/Home/HomeTop';
import Experience from '../components/page/Home/Experience';
import WhyUs from '../components/page/Home/WhyUs';
import FeedBack from '../components/page/Home/FeedBack';
import Help from '../../src/image/Help.png';

const Home = () => {
  return (
    <HomeMainContainer>
      <HomeTop />
      <Bot src={Help} alt="help" />
      <Experience />
      <WhyUs />
      <FeedBack />
    </HomeMainContainer>
  )
}

export default Home