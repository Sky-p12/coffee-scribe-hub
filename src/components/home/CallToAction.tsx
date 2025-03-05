
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";

export const CallToAction = () => {
  const { t } = useLanguage();
  
  return (
    <div className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-coffee-50 via-transparent to-espresso-50 opacity-50 z-0" />
      
      <PageContainer className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t("readyToStreamline")}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t("startManagingToday")}
          </p>
          
          <Button size="lg" asChild>
            <Link to="/login">{t("getStartedNow")}</Link>
          </Button>
        </div>
      </PageContainer>
    </div>
  );
};
