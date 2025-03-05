
import { Container, PageContainer } from "@/components/layout/Container";
import { Coffee, Shield, Users, Star, Brain, Server } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <Container>
      <PageContainer>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t("aboutCoffeeSAV")}</h1>
            <p className="text-xl text-muted-foreground">
              {t("aboutTagline")}
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p>
              CoffeeSAV was founded in 2023 with a simple mission: make coffee machine maintenance more efficient, transparent, and data-driven. As coffee enthusiasts ourselves, we understand the critical role that proper maintenance plays in delivering the perfect cup, every time.
            </p>
            
            <p>
              Our platform bridges the gap between coffee machine owners, service technicians, and manufacturers to create a seamless maintenance ecosystem. By digitizing the entire service process, we help reduce downtime, extend machine lifespan, and ensure optimal performance.
            </p>
            
            <p>
              Whether you manage a single café or oversee hundreds of machines across multiple locations, CoffeeSAV provides the tools you need to stay on top of maintenance schedules, track repair history, and make data-driven decisions about your equipment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-lg">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("aboutMission")}</h3>
              <p className="text-muted-foreground">
                To empower businesses with the tools and insights needed to maximize the lifespan and performance of their coffee equipment through proactive maintenance and data-driven decision making.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-lg">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("aboutVision")}</h3>
              <p className="text-muted-foreground">
                To create a global standard for coffee machine maintenance that ensures every cup of coffee served reaches its full flavor potential through properly maintained equipment.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-8">{t("aboutPrinciples")}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <Coffee className="h-6 w-6" />,
                title: t("qualityFirst"),
                description: "We believe that proper maintenance is the foundation of quality coffee."
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: t("collaboration"),
                description: "We bring together machine owners, technicians, and manufacturers."
              },
              {
                icon: <Brain className="h-6 w-6" />,
                title: t("innovation"),
                description: "We constantly evolve our platform with cutting-edge technology."
              },
              {
                icon: <Server className="h-6 w-6" />,
                title: t("dataDriver"),
                description: "We provide insights that help optimize maintenance schedules."
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: t("reliability"),
                description: "We build tools you can depend on for your critical equipment."
              },
              {
                icon: <Star className="h-6 w-6" />,
                title: t("userCentric"),
                description: "We design our platform around the needs of our users."
              }
            ].map((principle, index) => (
              <div key={index} className="flex items-start p-4">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  {principle.icon}
                </div>
                <div>
                  <h3 className="font-medium mb-1">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{t("joinOurJourney")}</h2>
            <p className="text-muted-foreground mb-6">
              We're just getting started on our mission to transform coffee machine maintenance. 
              Join us and be part of the revolution.
            </p>
          </div>
        </div>
      </PageContainer>
    </Container>
  );
};

export default AboutPage;
