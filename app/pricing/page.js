"use client"
import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HeaderSection from '../Components/HeaderSection/HeaderSection';
import PricingSection2 from './PricingSection2';
import Footer from '../Components/Footer/Footer';

const Page = () => {
  return (
    <div>
            <Navbar />
      <HeaderSection
        title={"خدمة الدفع"}
        current={"خدمة الدفع"}
        link="الرئيسية"
      />
      <PricingSection2/>
      <Footer/>
    </div>
  );
}

export default Page;
