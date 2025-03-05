
import React from "react";
import { Link } from "react-router-dom";
import { Coffee } from "lucide-react";
import { PageContainer } from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <PageContainer>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Coffee className="h-6 w-6 text-primary mr-2" />
            <span className="font-semibold text-lg">CoffeeSAV</span>
          </div>
          
          <div className="flex space-x-8">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("about")}
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("contactUs")}
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("privacy")}
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("terms")}
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CoffeeSAV. {t("allRightsReserved")}
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
};
