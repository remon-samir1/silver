"use client"
import HeaderSection from '@/app/Components/HeaderSection/HeaderSection';
import Navbar from '@/app/Components/Navbar/Navbar';
import React from 'react';
import BlogDetailsSection2 from './BlogDetailsSection2';

const Page = () => {
  return (
    <div>
            <Navbar />
      <HeaderSection
        title={"مقالات"}
        current={"مقالات"}
        link="الرئيسية"
      />
      <BlogDetailsSection2/>
    </div>
  );
}

export default Page;
