
import { Container, PageContainer } from "@/components/layout/Container";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Coffee, 
  Wrench, 
  History, 
  AlertTriangle,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock data - in a real app this would come from an API
  const stats = {
    totalMachines: 24,
    maintenanceDue: 3,
    recentServices: 8,
    alerts: 2
  };
  
  const recentActivities = [
    { 
      id: 1, 
      type: "maintenance", 
      machine: "La Marzocco Linea PB", 
      date: "2023-06-15", 
      technician: "John Doe" 
    },
    { 
      id: 2, 
      type: "alert", 
      machine: "Rancilio Classe 11", 
      date: "2023-06-14", 
      issue: "Water pressure low" 
    },
    { 
      id: 3, 
      type: "registration", 
      machine: "Nuova Simonelli Aurelia Wave", 
      date: "2023-06-12", 
      location: "Downtown Café" 
    },
  ];
  
  return (
    <Container>
      <PageContainer>
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your coffee machine operations.
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Machines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{stats.totalMachines}</div>
                <Coffee className="h-5 w-5 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Across all locations
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Maintenance Due
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{stats.maintenanceDue}</div>
                <Wrench className="h-5 w-5 text-amber-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Within next 7 days
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Recent Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{stats.recentServices}</div>
                <History className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Last 30 days
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{stats.alerts}</div>
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Require attention
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Latest events across your machines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-4 border-b border-border pb-4 last:border-0 last:pb-0">
                      <div className={`mt-0.5 rounded-full p-1.5 ${
                        activity.type === 'maintenance' 
                          ? 'bg-green-100 text-green-600' 
                          : activity.type === 'alert' 
                            ? 'bg-red-100 text-red-600' 
                            : 'bg-blue-100 text-blue-600'
                      }`}>
                        {activity.type === 'maintenance' 
                          ? <Wrench className="h-4 w-4" /> 
                          : activity.type === 'alert' 
                            ? <AlertTriangle className="h-4 w-4" /> 
                            : <Coffee className="h-4 w-4" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">
                          {activity.machine}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {activity.type === 'maintenance' 
                            ? `Serviced by ${activity.technician}` 
                            : activity.type === 'alert' 
                              ? `Issue: ${activity.issue}` 
                              : `Location: ${activity.location}`}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(activity.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Quick Actions */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks and shortcuts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start" asChild>
                  <Link to="/machines/register">
                    <Coffee className="mr-2 h-4 w-4" />
                    Register New Machine
                  </Link>
                </Button>
                <Button className="w-full justify-start" asChild>
                  <Link to="/maintenance/create">
                    <Wrench className="mr-2 h-4 w-4" />
                    Log Maintenance
                  </Link>
                </Button>
                <Button className="w-full justify-start" asChild>
                  <Link to="/machines">
                    <Activity className="mr-2 h-4 w-4" />
                    View All Machines
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageContainer>
    </Container>
  );
};

export default Dashboard;
