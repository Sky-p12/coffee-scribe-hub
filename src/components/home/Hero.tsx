
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Coffee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();
  
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-50 via-transparent to-espresso-50 z-0" />
      
      <div 
        className="relative z-10 max-w-3xl mx-auto text-center animate-fade-in"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="mb-6 inline-block">
          <div className="bg-primary/10 p-4 rounded-full">
            <Coffee className="h-12 w-12 text-primary" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance">
          {t("coffeeManagementSystem")}
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          {t("trackMaintenanceDescription")}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="relative group"
            asChild
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link to="/login">
              {t("getStarted")}
              <span className={`
                inline-block ml-2 transition-transform duration-300 ease-in-out
                ${isHovered ? "translate-x-1" : ""}
              `}>
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            asChild
          >
            <Link to="/about">
              {t("learnMore")}
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-0" />
    </div>
  );
};
