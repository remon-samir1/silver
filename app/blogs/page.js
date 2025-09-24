"use client"
import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HeaderSection from '../Components/HeaderSection/HeaderSection';
import BlogSection2 from './BlogSection2';
import Footer from '../Components/Footer/Footer';

const Page = () => {
  return (
    <div>
          <Navbar />
      <HeaderSection
        title={"مقالات"}
        current={"مقالات"}
        link="الرئيسية"
      />
      <BlogSection2/>
      <Footer/>
    </div>
  );
}

export default Page;
