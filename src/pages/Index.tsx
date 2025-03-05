
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Coffee, 
  History, 
  FileText, 
  ArrowRight, 
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
import { Container, PageContainer } from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
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

const Features = () => {
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

const CallToAction = () => {
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

const Footer = () => {
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
