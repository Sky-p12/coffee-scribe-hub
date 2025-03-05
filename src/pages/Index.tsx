
import React from "react";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { CallToAction } from "@/components/home/CallToAction";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <Container>
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </Container>
  );
};

export default Index;
