
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, PageContainer } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Coffee,
  Plus,
  Search,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Calendar,
  MapPin,
} from "lucide-react";
import { machines } from "@/data/machines";
import { useLanguage } from "@/contexts/LanguageContext";

const MachinesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useLanguage();

  const filteredMachines = machines.filter(machine => 
    machine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    machine.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    machine.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <PageContainer>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">{t("coffeeMachines")}</h1>
            <p className="text-muted-foreground">
              {t("viewAndManageMachines")}
            </p>
          </div>
          <Button className="mt-4 md:mt-0" asChild>
            <Link to="/machines/register">
              <Plus className="mr-2 h-4 w-4" />
              {t("registerNewMachine")}
            </Link>
          </Button>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t("searchMachines")}
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMachines.length > 0 ? (
            filteredMachines.map((machine) => (
              <Link 
                key={machine.id} 
                to={`/machines/${machine.id}`}
                className="group"
              >
                <Card className="h-full transition-all hover:shadow-md group-hover:border-primary/50">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{machine.name}</CardTitle>
                      {machine.status === "operational" ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : machine.status === "needs_service" ? (
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="flex items-center text-muted-foreground mb-3">
                      <Coffee className="h-4 w-4 mr-2" />
                      <span className="text-sm">{machine.model}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{machine.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">
                        {machine.nextServiceDue
                          ? `${t("nextService")}: ${new Date(machine.nextServiceDue).toLocaleDateString()}`
                          : t("noServiceScheduled")}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" size="sm" className="ml-auto group-hover:text-primary transition-colors">
                      {t("viewDetails")}
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <div className="bg-muted/50 p-4 rounded-full mb-4">
                <Coffee className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">{t("noMachinesFound")}</h3>
              <p className="text-muted-foreground text-center mb-4">
                {t("noMachinesMessage")}
              </p>
              <Button variant="outline" onClick={() => setSearchTerm("")}>
                {t("clearSearch")}
              </Button>
            </div>
          )}
        </div>
      </PageContainer>
    </Container>
  );
};

export default MachinesPage;
