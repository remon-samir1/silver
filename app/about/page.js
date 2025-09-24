"use client"
import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HeaderSection from '../Components/HeaderSection/HeaderSection';
import Footer from '../Components/Footer/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import AboutSection2 from './AboutSection2';
import AboutSection3 from './AboutSection3';
import AboutSection4 from './AboutSection4';
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div>
        <Navbar />
      <HeaderSection
        title={"من نحن"}
        current={"من نحن"}
        link="الرئيسية"
      />
      <AboutSection2/>
      <AboutSection3/>
      <AboutSection4/>
      <Footer/>
    </div>
  );
}

export default Page;
