"use client"
import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HeaderSection from '../Components/HeaderSection/HeaderSection';
import ProjectsSection2 from './ProjectsSection2';
import Footer from '../Components/Footer/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  return (
    <div>
        <Navbar />
      <HeaderSection
        title={"الاعمال"}
        current={"الاعمال"}
        link="الرئيسية"
      />
      <ProjectsSection2/>
      <Footer/>
    </div>
  );
}

export default Page;
