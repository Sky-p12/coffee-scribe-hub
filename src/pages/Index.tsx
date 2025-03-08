
import React from "react";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { CallToAction } from "@/components/home/CallToAction";
import { Footer } from "@/components/layout/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const Index = () => {
  // Using the theme context to ensure the page correctly uses the theme
  const { theme } = useTheme();
  
  return (
    <Container className={theme}>
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </Container>
  );
};

export default Index;
