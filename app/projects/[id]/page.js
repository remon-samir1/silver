"use client"
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import HeaderSection from '../../Components/HeaderSection/HeaderSection';
import Footer from '../../Components/Footer/Footer';
import ProjectDetailsSection2 from './ProjectDetailsSection2';
import ProjectDetailsSection3 from './ProjectDetailsSection3';

const Page = () => {
  return (
    <div>
        <Navbar />
      <HeaderSection
        title={"الاعمال"}
        current={"الاعمال"}
        link="الرئيسية"
      />
      <ProjectDetailsSection2/>
      <ProjectDetailsSection3/>
      <Footer/>
    </div>
  );
}

export default Page;
