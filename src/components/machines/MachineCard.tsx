
import { useState } from "react";
import { Link } from "react-router-dom";
import { Coffee, Calendar, FileText, ChevronRight, Timer, MoreVertical } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QRCode } from "../ui-custom/QRCode";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface Machine {
  id: string;
  machineNumber: string;
  model: string;
  client: string;
  location: string;
  installDate: string;
  lastMaintenance?: string;
  status: "operational" | "needs-service" | "under-repair" | "inactive";
  nextServiceDate?: string;
}

interface MachineCardProps {
  machine: Machine;
  compact?: boolean;
}

export function MachineCard({ machine, compact = false }: MachineCardProps) {
  const [showQR, setShowQR] = useState(false);
  
  const getStatusColor = (status: Machine["status"]) => {
    switch (status) {
      case "operational": return "bg-green-500/10 text-green-700 dark:text-green-500 border-green-500/20";
      case "needs-service": return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-500 border-yellow-500/20";
      case "under-repair": return "bg-orange-500/10 text-orange-700 dark:text-orange-500 border-orange-500/20";
      case "inactive": return "bg-red-500/10 text-red-700 dark:text-red-500 border-red-500/20";
      default: return "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20";
    }
  };
  
  const getStatusText = (status: Machine["status"]) => {
    switch (status) {
      case "operational": return "Operational";
      case "needs-service": return "Needs Service";
      case "under-repair": return "Under Repair";
      case "inactive": return "Inactive";
      default: return "Unknown";
    }
  };
  
  if (compact) {
    return (
      <Card className="overflow-hidden hover:shadow-md transition-shadow group">
        <Link to={`/machines/${machine.id}`} className="block h-full">
          <div className="flex items-center p-4">
            <div className="mr-4 bg-muted rounded-full p-2">
              <Coffee className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="font-medium">{machine.machineNumber}</div>
              <div className="text-sm text-muted-foreground">{machine.model}</div>
            </div>
            <Badge className={`${getStatusColor(machine.status)}`}>
              {getStatusText(machine.status)}
            </Badge>
            <ChevronRight className="h-5 w-5 text-muted-foreground ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </Link>
      </Card>
    );
  }
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all group">
      <CardHeader className="relative">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="flex items-center">
              <span className="mr-2">{machine.machineNumber}</span>
              <Badge className={`${getStatusColor(machine.status)}`}>
                {getStatusText(machine.status)}
              </Badge>
            </CardTitle>
            <CardDescription className="mt-1">
              {machine.model} • {machine.client}
            </CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card">
              <DropdownMenuItem onClick={() => setShowQR(!showQR)}>
                {showQR ? "Hide QR Code" : "Show QR Code"}
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to={`/maintenance/new?machine=${machine.id}`}>
                  Log Maintenance
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to={`/machines/${machine.id}/edit`}>
                  Edit Machine
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        {showQR ? (
          <div className="flex flex-col items-center justify-center pb-4 pt-2">
            <QRCode 
              value={`https://coffee-sav.com/machines/${machine.id}`} 
              size={160}
              className="mb-2"
            />
            <span className="text-xs text-muted-foreground">
              Scan to view machine details
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Installed: {machine.installDate}</span>
            </div>
            {machine.lastMaintenance && (
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Last service: {machine.lastMaintenance}</span>
              </div>
            )}
            {machine.nextServiceDate && (
              <div className="flex items-center space-x-2 col-span-2">
                <Timer className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Next service: {machine.nextServiceDate}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="ghost" className="w-full justify-start group" asChild>
          <Link to={`/machines/${machine.id}`} className="flex items-center">
            <span className="flex-1">View Details</span>
            <ChevronRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
