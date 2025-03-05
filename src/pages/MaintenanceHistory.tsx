
import { useState } from "react";
import { Container, PageContainer } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search, Filter, Wrench, Coffee, Calendar, User, ChevronRight } from "lucide-react";
import { machines } from "@/data/machines";

// Mock maintenance history
const maintenanceRecords = [
  {
    id: "mr1",
    machineId: "m1",
    date: "2023-06-15",
    type: "Routine",
    technician: "John Doe",
    parts: ["Water filter", "Gaskets"],
    notes: "Cleaned machine, replaced water filter and gaskets."
  },
  {
    id: "mr2",
    machineId: "m2",
    date: "2023-06-10",
    type: "Repair",
    technician: "Jane Smith",
    parts: ["Pressure valve"],
    notes: "Replaced faulty pressure valve and calibrated machine."
  },
  {
    id: "mr3",
    machineId: "m3",
    date: "2023-06-05",
    type: "Routine",
    technician: "John Doe",
    parts: ["Water filter"],
    notes: "Regular maintenance and cleaning."
  },
  {
    id: "mr4",
    machineId: "m4",
    date: "2023-06-02",
    type: "Repair",
    technician: "Jane Smith",
    parts: ["Heating element", "Temperature sensor"],
    notes: "Replaced heating element and temperature sensor. Tested thoroughly."
  },
  {
    id: "mr5",
    machineId: "m1",
    date: "2023-03-10",
    type: "Routine",
    technician: "John Doe",
    parts: ["Gaskets", "O-rings"],
    notes: "Replaced all gaskets and O-rings. Machine running well."
  }
];

const MaintenanceHistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Get machine details for each record
  const enhancedRecords = maintenanceRecords.map(record => {
    const machine = machines.find(m => m.id === record.machineId);
    return {
      ...record,
      machineName: machine?.name || "Unknown Machine",
      machineModel: machine?.model || "Unknown Model"
    };
  });
  
  // Filter records based on search term
  const filteredRecords = enhancedRecords.filter(record => 
    record.machineName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.machineModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.technician.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Sort records by date, most recent first
  const sortedRecords = [...filteredRecords].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  return (
    <Container>
      <PageContainer>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Maintenance History</h1>
            <p className="text-muted-foreground">
              View all maintenance and service records
            </p>
          </div>
          <Button className="mt-4 md:mt-0" asChild>
            <Link to="/maintenance/create">
              <Wrench className="mr-2 h-4 w-4" />
              Log New Maintenance
            </Link>
          </Button>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by machine, technician, or type..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Maintenance Records</CardTitle>
          </CardHeader>
          <CardContent>
            {sortedRecords.length > 0 ? (
              <div className="space-y-6">
                {sortedRecords.map(record => (
                  <div key={record.id} className="border-b border-border pb-6 last:border-0 last:pb-0">
                    <div className="flex flex-col md:flex-row justify-between mb-3">
                      <div className="flex items-center mb-2 md:mb-0">
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          record.type === "Routine" ? "bg-green-500" : "bg-amber-500"
                        }`} />
                        <span className="font-medium">{record.type} Maintenance</span>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(record.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-3">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Machine</div>
                        <div className="flex items-center">
                          <Coffee className="h-4 w-4 mr-1 text-muted-foreground" />
                          <Link 
                            to={`/machines/${record.machineId}`} 
                            className="hover:text-primary hover:underline"
                          >
                            {record.machineName} ({record.machineModel})
                          </Link>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Technician</div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1 text-muted-foreground" />
                          {record.technician}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Parts Replaced</div>
                        <div>
                          {record.parts.length > 0 
                            ? record.parts.join(", ")
                            : "No parts replaced"}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="text-sm text-muted-foreground mb-1">Notes</div>
                      <div className="text-sm">{record.notes}</div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/maintenance/${record.id}`}>
                          View Full Details
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="inline-flex bg-muted/50 p-3 rounded-full mb-3">
                  <Wrench className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-1">No maintenance records found</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We couldn't find any maintenance records matching your search criteria.
                </p>
                <Button variant="outline" onClick={() => setSearchTerm("")}>
                  Clear Search
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </PageContainer>
    </Container>
  );
};

export default MaintenanceHistoryPage;
