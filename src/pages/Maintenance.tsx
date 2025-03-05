
import { Container, PageContainer } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Wrench, Plus, ChevronRight, Coffee, Calendar } from "lucide-react";
import { machines } from "@/data/machines";

const MaintenancePage = () => {
  // Filter machines that need maintenance
  const maintenanceDueMachines = machines.filter(
    machine => machine.status === "needs_service" || machine.status === "out_of_order"
  );
  
  // Filter machines that will need maintenance soon
  const upcomingMaintenanceMachines = machines.filter(machine => {
    if (!machine.nextServiceDue || machine.status !== "operational") return false;
    
    const nextServiceDate = new Date(machine.nextServiceDue);
    const today = new Date();
    const daysDifference = Math.floor((nextServiceDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
    
    return daysDifference > 0 && daysDifference <= 14; // Maintenance due within next 14 days
  });
  
  return (
    <Container>
      <PageContainer>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Maintenance</h1>
            <p className="text-muted-foreground">
              Schedule and track maintenance for your coffee machines
            </p>
          </div>
          <Button className="mt-4 md:mt-0" asChild>
            <Link to="/maintenance/create">
              <Plus className="mr-2 h-4 w-4" />
              Log New Maintenance
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-xl">
                <Wrench className="h-5 w-5 mr-2 text-amber-500" />
                Maintenance Due
              </CardTitle>
              <CardDescription>
                Machines that require immediate attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              {maintenanceDueMachines.length > 0 ? (
                <div className="space-y-4">
                  {maintenanceDueMachines.map(machine => (
                    <div key={machine.id} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                      <div className="flex-1">
                        <div className="font-medium">{machine.name}</div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Coffee className="h-3 w-3 mr-1" />
                          {machine.model}
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/machines/${machine.id}`}>
                          View
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="inline-flex bg-green-50 p-3 rounded-full mb-3">
                    <Wrench className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-1">All machines operational</h3>
                  <p className="text-sm text-muted-foreground">
                    There are no machines currently requiring maintenance.
                  </p>
                </div>
              )}
            </CardContent>
            {maintenanceDueMachines.length > 0 && (
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link to="/maintenance/create">
                    <Wrench className="mr-2 h-4 w-4" />
                    Schedule Maintenance
                  </Link>
                </Button>
              </CardFooter>
            )}
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-xl">
                <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                Upcoming Maintenance
              </CardTitle>
              <CardDescription>
                Machines due for maintenance in the next 14 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              {upcomingMaintenanceMachines.length > 0 ? (
                <div className="space-y-4">
                  {upcomingMaintenanceMachines.map(machine => (
                    <div key={machine.id} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                      <div className="flex-1">
                        <div className="font-medium">{machine.name}</div>
                        <div className="flex items-center text-sm text-muted-foreground mb-1">
                          <Coffee className="h-3 w-3 mr-1" />
                          {machine.model}
                        </div>
                        <div className="text-xs text-blue-600">
                          Due: {new Date(machine.nextServiceDue!).toLocaleDateString()}
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/machines/${machine.id}`}>
                          View
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="inline-flex bg-blue-50 p-3 rounded-full mb-3">
                    <Calendar className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-1">No upcoming maintenance</h3>
                  <p className="text-sm text-muted-foreground">
                    There are no machines scheduled for maintenance in the next 14 days.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Maintenance Tips</CardTitle>
            <CardDescription>
              Follow these best practices to keep your coffee machines in optimal condition
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Regular Cleaning</h3>
                <p className="text-sm text-muted-foreground">
                  Daily cleaning of group heads, steam wands, and drip trays prevents build-up and ensures consistent coffee quality.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Water Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Use filtered water and regularly check filter condition to prevent scale build-up and extend machine life.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Preventive Maintenance</h3>
                <p className="text-sm text-muted-foreground">
                  Schedule professional service every 3-6 months for thorough inspection and replacement of wear parts.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Staff Training</h3>
                <p className="text-sm text-muted-foreground">
                  Ensure staff are properly trained on machine operation and basic maintenance procedures.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </PageContainer>
    </Container>
  );
};

export default MaintenancePage;
