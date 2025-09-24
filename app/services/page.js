"use client"
import React from 'react';
import HeaderSection from '../Components/HeaderSection/HeaderSection';
import Navbar from '../Components/Navbar/Navbar';
import ServicesSection2 from './ServicesSection2';
import ContactSection from '../ContactSection';
import Footer from '../Components/Footer/Footer';
import "./services.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Page = () => {
  return (
    <div>
      <Navbar/>
      <HeaderSection title={"الخدمات"} current={"الخدمات"} link='الرئيسية'/>
      <ServicesSection2/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default Page;
