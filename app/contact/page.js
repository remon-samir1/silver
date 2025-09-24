"use client"
import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HeaderSection from '../Components/HeaderSection/HeaderSection';
import ContactSection2 from './ContactSection2';
import ContactSection3 from './ContactSection3';
import Footer from '../Components/Footer/Footer';

const Page = () => {
  return (
    <div>
          <Navbar />
      <HeaderSection
        title={"تواصل معنا"}
        current={"تواصل معنا"}
        link="الرئيسية"
      />
      <ContactSection2/>
      <ContactSection3/>
      <Footer/>
    </div>
  );
}

export default Page;
