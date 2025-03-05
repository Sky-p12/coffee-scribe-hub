
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Coffee,
  Calendar,
  MapPin,
  Clock,
  Wrench,
  History,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowLeft,
  Edit,
  Trash2,
  QrCode,
} from "lucide-react";
import { machines } from "@/data/machines";
import { QRCode } from "@/components/ui-custom/QRCode";
import { useToast } from "@/hooks/use-toast";

const MachineDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Find the machine by ID
  const machine = machines.find(m => m.id === id);
  
  if (!machine) {
    return (
      <Container>
        <PageContainer className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <Card className="max-w-md w-full">
            <CardHeader>
              <CardTitle>Machine Not Found</CardTitle>
              <CardDescription>
                The machine you're looking for doesn't exist or has been removed.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link to="/machines">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Machines
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </PageContainer>
      </Container>
    );
  }
  
  const handleDelete = () => {
    toast({
      title: "Machine Deleted",
      description: "The machine has been successfully deleted.",
    });
    navigate("/machines");
  };
  
  const getStatusIcon = () => {
    switch (machine.status) {
      case "operational":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "needs_service":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case "out_of_order":
        return <XCircle className="h-5 w-5 text-destructive" />;
    }
  };
  
  const getStatusText = () => {
    switch (machine.status) {
      case "operational":
        return "Operational";
      case "needs_service":
        return "Needs Service";
      case "out_of_order":
        return "Out of Order";
    }
  };
  
  // Mock maintenance history
  const maintenanceHistory = [
    {
      id: "m1",
      date: "2023-06-15",
      type: "Routine",
      technician: "John Doe",
      notes: "Cleaned machine, replaced water filter."
    },
    {
      id: "m2",
      date: "2023-03-10",
      type: "Repair",
      technician: "Jane Smith",
      notes: "Fixed pressure issue, calibrated machine."
    },
    {
      id: "m3",
      date: "2023-01-05",
      type: "Installation",
      technician: "John Doe",
      notes: "Initial setup and calibration."
    }
  ];
  
  return (
    <Container>
      <PageContainer>
        <div className="mb-6">
          <Button variant="outline" size="sm" onClick={() => navigate(-1)} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold mr-3">{machine.name}</h1>
              {getStatusIcon()}
            </div>
            
            <div className="flex space-x-2 mt-4 md:mt-0">
              <Button variant="outline" asChild>
                <Link to={`/machines/${machine.id}/edit`}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Details
                </Link>
              </Button>
              <Button variant="destructive" onClick={handleDelete}>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </div>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance History</TabsTrigger>
            <TabsTrigger value="qrcode">QR Code</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Machine Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium mb-1">Model</div>
                        <div className="flex items-center">
                          <Coffee className="h-4 w-4 text-muted-foreground mr-2" />
                          <span>{machine.model}</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium mb-1">Serial Number</div>
                        <div>{machine.serialNumber}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium mb-1">Location</div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                          <span>{machine.location}</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium mb-1">Status</div>
                        <div className="flex items-center">
                          {getStatusIcon()}
                          <span className="ml-2">{getStatusText()}</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium mb-1">Installation Date</div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                          <span>{new Date(machine.installedDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium mb-1">Last Service</div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                          <span>
                            {machine.lastService
                              ? new Date(machine.lastService).toLocaleDateString()
                              : "No service recorded"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link to="/maintenance/create">
                        <Wrench className="mr-2 h-4 w-4" />
                        Log Maintenance
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Service Schedule</CardTitle>
                    <CardDescription>Upcoming and past service dates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium mb-1">Next Service Due</div>
                        <div className="flex items-center text-amber-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>
                            {machine.nextServiceDue
                              ? new Date(machine.nextServiceDue).toLocaleDateString()
                              : "No service scheduled"}
                          </span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium mb-1">Last Maintenance</div>
                        <div className="flex items-center">
                          <History className="h-4 w-4 text-muted-foreground mr-2" />
                          <span>
                            {machine.lastService
                              ? new Date(machine.lastService).toLocaleDateString()
                              : "No maintenance recorded"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="maintenance">
            <Card>
              <CardHeader>
                <CardTitle>Maintenance History</CardTitle>
                <CardDescription>Record of all services performed on this machine</CardDescription>
              </CardHeader>
              <CardContent>
                {maintenanceHistory.length > 0 ? (
                  <div className="space-y-4">
                    {maintenanceHistory.map((record) => (
                      <div key={record.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <div className="font-medium">{record.type} Maintenance</div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(record.date).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="text-sm mb-2">Technician: {record.technician}</div>
                        <div className="text-sm text-muted-foreground">{record.notes}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <div className="inline-flex bg-muted/50 p-3 rounded-full mb-3">
                      <History className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-1">No maintenance records</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      There are no maintenance records for this machine yet.
                    </p>
                    <Button asChild>
                      <Link to="/maintenance/create">
                        <Wrench className="mr-2 h-4 w-4" />
                        Log First Maintenance
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link to="/maintenance/create">
                    <Wrench className="mr-2 h-4 w-4" />
                    Log New Maintenance
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="qrcode">
            <Card>
              <CardHeader>
                <CardTitle>Machine QR Code</CardTitle>
                <CardDescription>
                  Scan this code to quickly access this machine's details and service history
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
                  <QRCode 
                    value={`${window.location.origin}/machines/${machine.id}`} 
                    size={200}
                  />
                </div>
                <div className="text-center max-w-md mx-auto">
                  <h3 className="font-medium mb-2 flex items-center justify-center">
                    <QrCode className="h-4 w-4 mr-2" />
                    How to use this QR code
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Print this QR code and attach it to the machine. Technicians can scan it 
                    to quickly access service history and log maintenance.
                  </p>
                  <Button variant="outline" className="w-full">
                    Print QR Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </PageContainer>
    </Container>
  );
};

export default MachineDetails;
