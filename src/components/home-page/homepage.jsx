import React from "react";
import HeroSection from "./herosection/herosection";
import SliderSection from "./slider-section/slider-section";
import MissionStatement from "./mission-statement/mission-statement";
import Pillars from "./pillars/pillars";
import ContactForm from "./contact-form/contact-form";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <SliderSection />
      <MissionStatement />
      <Pillars />
      <ContactForm />
    </>
  );
};

export default Homepage;
