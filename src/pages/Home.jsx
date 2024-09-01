import React from "react";
import Testimonial from "../components/Testimonial";
import Marquee from "../components/Marquee";
import HeroSection from "../components/HeroSection";
import TutorCarousel from "../components/TutorCarousel";
import SubjectsComponent from "../components/SubjectsComponent";
import HeroComponent from "../components/HeroComponent";
import CardComponent from "../components/CardComponent";

const Home = () => {
  return (
    <>
      <Marquee />
      <HeroSection />
      <TutorCarousel />
      <SubjectsComponent />
      <HeroComponent />
      <CardComponent />
      <Testimonial />
    </>
  );
};

export default Home;
