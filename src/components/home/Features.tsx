
import React from "react";
import { Link } from "react-router-dom";
import { 
  Coffee, 
  History, 
  FileText, 
  ChevronRight, 
  QrCode,
  ClipboardList,
  Wrench
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { PageContainer } from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";

export const Features = () => {
  const { t } = useLanguage();
  
  return (
    <div className="py-16 md:py-24 bg-muted/50">
      <PageContainer>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">{t("powerfulFeatures")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("everythingYouNeed")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Coffee className="h-10 w-10" />,
              title: t("machineRegistration"),
              description: t("machineRegistrationDesc")
            },
            {
              icon: <QrCode className="h-10 w-10" />,
              title: t("qrCodeIntegration"),
              description: t("qrCodeIntegrationDesc")
            },
            {
              icon: <ClipboardList className="h-10 w-10" />,
              title: t("maintenanceLogging"),
              description: t("maintenanceLoggingDesc")
            },
            {
              icon: <History className="h-10 w-10" />,
              title: t("serviceHistory"),
              description: t("serviceHistoryDesc")
            },
            {
              icon: <Wrench className="h-10 w-10" />,
              title: t("partsTracking"),
              description: t("partsTrackingDesc")
            },
            {
              icon: <FileText className="h-10 w-10" />,
              title: t("reporting"),
              description: t("reportingDesc")
            },
          ].map((feature, index) => (
            <Card 
              key={index} 
              className="border bg-card/70 backdrop-blur-sm hover:shadow-md transition-all group"
            >
              <CardHeader>
                <div className="mb-2 bg-primary/10 p-3 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">
                  {feature.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="group" asChild>
                  <Link to="/login" className="flex items-center">
                    <span>{t("learnMore")}</span>
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </PageContainer>
    </div>
  );
};
