
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Coffee, 
  BarChart3, 
  AlertTriangle, 
  Clock, 
  PlusCircle,
  Wrench,
  Search,
  Calendar
} from "lucide-react";
import { Container, PageContainer } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MachineCard, type Machine } from "@/components/machines/MachineCard";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

// Mock data
const MOCK_MACHINES: Machine[] = [
  {
    id: "m1",
    machineNumber: "MCH001",
    model: "Espresso Pro X1",
    client: "Cafe Deluxe",
    location: "123 Main St",
    installDate: "2023-01-15",
    lastMaintenance: "2023-08-10",
    status: "operational",
    nextServiceDate: "2023-11-10",
  },
  {
    id: "m2",
    machineNumber: "MCH002",
    model: "Barista 3000",
    client: "Coffee Shop Co.",
    location: "456 Oak Ave",
    installDate: "2022-11-05",
    lastMaintenance: "2023-09-20",
    status: "needs-service",
    nextServiceDate: "2023-10-20",
  },
  {
    id: "m3",
    machineNumber: "MCH003",
    model: "Espresso Pro X2",
    client: "Morning Brew",
    location: "789 Pine Rd",
    installDate: "2023-03-22",
    status: "under-repair",
  },
];

const MOCK_UPCOMING_MAINTENANCE = [
  {
    id: "maint1",
    machineId: "m1",
    machineNumber: "MCH001",
    client: "Cafe Deluxe",
    date: "2023-10-28",
    type: "Scheduled",
  },
  {
    id: "maint2",
    machineId: "m2",
    machineNumber: "MCH002",
    client: "Coffee Shop Co.",
    date: "2023-10-30",
    type: "Repair",
  },
];

const StatCard = ({ title, value, icon, description, trend, color = "primary" }: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  trend?: { value: number; label: string };
  color?: "primary" | "success" | "warning" | "danger";
}) => {
  const bgColors = {
    primary: "bg-primary/10",
    success: "bg-green-500/10",
    warning: "bg-yellow-500/10",
    danger: "bg-red-500/10",
  };
  
  const textColors = {
    primary: "text-primary",
    success: "text-green-600 dark:text-green-500",
    warning: "text-yellow-600 dark:text-yellow-500",
    danger: "text-red-600 dark:text-red-500",
  };
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          <div className={`p-2 rounded-full ${bgColors[color]}`}>
            {icon}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
        {trend && (
          <div className="flex items-center mt-2">
            <span 
              className={`text-xs font-medium ${
                trend.value >= 0 ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500"
              }`}
            >
              {trend.value >= 0 ? "+" : ""}{trend.value}%
            </span>
            <span className="text-xs text-muted-foreground ml-1">
              {trend.label}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter machines based on search query
  const filteredMachines = MOCK_MACHINES.filter(machine => 
    machine.machineNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    machine.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    machine.model.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const machinesNeedingService = MOCK_MACHINES.filter(
    m => m.status === "needs-service" || m.status === "under-repair"
  ).length;
  
  return (
    <Container>
      <PageContainer>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold animate-fade-in">Dashboard</h1>
            <p className="text-muted-foreground mt-1 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Overview of your coffee machine management system
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-4 md:mt-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button asChild>
              <Link to="/machines/new" className="flex items-center">
                <PlusCircle className="mr-2 h-4 w-4" />
                Register Machine
              </Link>
            </Button>
            
            <Button variant="outline" asChild>
              <Link to="/maintenance/new" className="flex items-center">
                <Wrench className="mr-2 h-4 w-4" />
                Log Maintenance
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <StatCard 
            title="Total Machines" 
            value={MOCK_MACHINES.length}
            icon={<Coffee className="h-4 w-4 text-primary" />}
            description="Machines in the system"
            trend={{ value: 12, label: "vs last month" }}
          />
          
          <StatCard 
            title="Requiring Service" 
            value={machinesNeedingService}
            icon={<AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-500" />}
            description="Machines needing attention"
            color="warning"
          />
          
          <StatCard 
            title="Upcoming Maintenance" 
            value={MOCK_UPCOMING_MAINTENANCE.length}
            icon={<Calendar className="h-4 w-4 text-primary" />}
            description="Scheduled in next 7 days"
          />
          
          <StatCard 
            title="Service Completed" 
            value={8}
            icon={<BarChart3 className="h-4 w-4 text-green-600 dark:text-green-500" />}
            description="In the last 30 days"
            trend={{ value: 5, label: "vs previous period" }}
            color="success"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 space-y-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h2 className="text-xl font-semibold mb-2 sm:mb-0">Recent Machines</h2>
              
              <div className="w-full sm:w-auto">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search machines..."
                    className="w-full sm:w-[240px] pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            <div className="grid gap-4">
              {filteredMachines.length > 0 ? (
                filteredMachines.map(machine => (
                  <MachineCard key={machine.id} machine={machine} compact />
                ))
              ) : (
                <Card className="p-8 text-center">
                  <CardDescription>No machines found matching your search.</CardDescription>
                </Card>
              )}
              
              <Button 
                variant="outline" 
                className="mt-2"
                onClick={() => navigate("/machines")}
              >
                View All Machines
              </Button>
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-xl font-semibold">Upcoming Maintenance</h2>
            
            <div className="space-y-3">
              {MOCK_UPCOMING_MAINTENANCE.map(maintenance => (
                <Card key={maintenance.id} className="overflow-hidden hover:shadow-sm transition-shadow">
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {maintenance.machineNumber} - {maintenance.client}
                    </CardTitle>
                    <CardDescription>
                      {maintenance.type} Maintenance
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>
                        {new Date(maintenance.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to={`/maintenance/new?machine=${maintenance.machineId}`}>
                        Prepare Service Report
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              
              {MOCK_UPCOMING_MAINTENANCE.length === 0 && (
                <Card className="p-8 text-center">
                  <CardDescription>No upcoming maintenance scheduled.</CardDescription>
                </Card>
              )}
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate("/maintenance")}
              >
                View All Maintenance
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </Container>
  );
}
