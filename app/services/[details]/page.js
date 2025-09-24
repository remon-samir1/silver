"use client";
import React from "react";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";
import Navbar from "../../Components/Navbar/Navbar";
import ServicesDetailsSection2 from "./ServicesDetailsSection2";
import Footer from "@/app/Components/Footer/Footer";
const Page = () => {
  return (
    <div>
      <Navbar />
      <HeaderSection
        title={"الخدمات"}
        current={"تفاصيل الخدمات"}
        link="الرئيسية"
      />
      <ServicesDetailsSection2/>
      <Footer/>
    </div>
  );
};

export default Page;
