
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Coffee, 
  Search, 
  PlusCircle, 
  Filter,
  QrCode,
  Download,
  Printer,
  MoreHorizontal,
  SlidersHorizontal
} from "lucide-react";
import { Container, PageContainer } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MachineCard, type Machine } from "@/components/machines/MachineCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

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
  {
    id: "m4",
    machineNumber: "MCH004",
    model: "BrewMaster 500",
    client: "Sunrise Cafe",
    location: "321 Elm St",
    installDate: "2023-02-10",
    lastMaintenance: "2023-09-05",
    status: "operational",
    nextServiceDate: "2023-12-05",
  },
  {
    id: "m5",
    machineNumber: "MCH005",
    model: "Barista 2000",
    client: "City Coffee",
    location: "555 Maple Ave",
    installDate: "2022-10-20",
    status: "inactive",
  },
  {
    id: "m6",
    machineNumber: "MCH006",
    model: "Espresso Lite",
    client: "Bean Express",
    location: "777 Cedar Blvd",
    installDate: "2023-05-15",
    lastMaintenance: "2023-09-10",
    status: "operational",
    nextServiceDate: "2024-01-10",
  },
];

export default function MachinesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  // Filter machines based on search query and status filter
  const filteredMachines = MOCK_MACHINES.filter(machine => {
    const matchesSearch = 
      machine.machineNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      machine.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      machine.model.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = !statusFilter || machine.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  return (
    <Container>
      <PageContainer>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center animate-fade-in">
              <Coffee className="h-6 w-6 mr-3 text-primary" />
              Machines
            </h1>
            <p className="text-muted-foreground mt-1 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Manage and monitor all your coffee machines
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-4 md:mt-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button asChild>
              <Link to="/machines/new" className="flex items-center">
                <PlusCircle className="mr-2 h-4 w-4" />
                Register Machine
              </Link>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card">
                <DropdownMenuItem className="flex items-center cursor-pointer">
                  <Download className="mr-2 h-4 w-4" />
                  Export Machines
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center cursor-pointer">
                  <Printer className="mr-2 h-4 w-4" />
                  Print List
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center cursor-pointer">
                  <QrCode className="mr-2 h-4 w-4" />
                  Batch Generate QR Codes
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center cursor-pointer">
                  Import Machines
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative w-full sm:w-auto max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search machines..."
              className="w-full sm:w-[320px] pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Select
              value={statusFilter || ""}
              onValueChange={(value) => setStatusFilter(value || null)}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Statuses</SelectItem>
                <SelectItem value="operational">Operational</SelectItem>
                <SelectItem value="needs-service">Needs Service</SelectItem>
                <SelectItem value="under-repair">Under Repair</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter Machines</SheetTitle>
                  <SheetDescription>
                    Apply filters to find specific machines
                  </SheetDescription>
                </SheetHeader>
                
                <div className="py-6 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Status</h3>
                    {["operational", "needs-service", "under-repair", "inactive"].map((status) => (
                      <div key={status} className="flex items-center space-x-2">
                        <Checkbox
                          id={`status-${status}`}
                          checked={statusFilter === status}
                          onCheckedChange={() => {
                            setStatusFilter(statusFilter === status ? null : status)
                          }}
                        />
                        <Label htmlFor={`status-${status}`} className="capitalize">
                          {status.replace("-", " ")}
                        </Label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Machine Models</h3>
                    {Array.from(new Set(MOCK_MACHINES.map(m => m.model))).map((model) => (
                      <div key={model} className="flex items-center space-x-2">
                        <Checkbox id={`model-${model}`} />
                        <Label htmlFor={`model-${model}`}>{model}</Label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Installation Date</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date-from">From</Label>
                        <Input id="date-from" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date-to">To</Label>
                        <Input id="date-to" type="date" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <SheetFooter>
                  <Button className="w-full">Apply Filters</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
            
            <div className="flex border rounded-md overflow-hidden">
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="icon"
                className="h-10 w-10 rounded-none border-0"
                onClick={() => setViewMode("grid")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </Button>
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="icon"
                className="h-10 w-10 rounded-none border-0"
                onClick={() => setViewMode("list")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        
        {filteredMachines.length > 0 ? (
          <>
            <div 
              className={`grid gap-6 animate-fade-in ${
                viewMode === "grid" 
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                  : "grid-cols-1"
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              {filteredMachines.map(machine => (
                <MachineCard 
                  key={machine.id} 
                  machine={machine} 
                  compact={viewMode === "list"}
                />
              ))}
            </div>
            
            <div className="mt-8 text-center text-sm text-muted-foreground">
              Showing {filteredMachines.length} of {MOCK_MACHINES.length} machines
            </div>
          </>
        ) : (
          <div className="text-center py-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Filter className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">No machines found</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              {searchQuery 
                ? `No machines match the search term "${searchQuery}"`
                : "No machines match the current filters"}
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery("");
                setStatusFilter(null);
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </PageContainer>
    </Container>
  );
}
