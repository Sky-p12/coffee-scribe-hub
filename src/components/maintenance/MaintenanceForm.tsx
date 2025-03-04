
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Wrench, CalendarIcon, Plus, Minus, Coffee } from "lucide-react";

// Mock data - in a real app would come from API
const PARTS = [
  { id: "p1", name: "Water Filter", code: "WF-101" },
  { id: "p2", name: "Brewing Group Gasket", code: "BG-202" },
  { id: "p3", name: "Pump", code: "PM-303" },
  { id: "p4", name: "Solenoid Valve", code: "SV-404" },
  { id: "p5", name: "Grinder Burrs", code: "GB-505" },
  { id: "p6", name: "Heating Element", code: "HE-606" },
  { id: "p7", name: "Control Board", code: "CB-707" },
  { id: "p8", name: "Pressure Switch", code: "PS-808" },
];

export function MaintenanceForm() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const machineId = searchParams.get("machine") || "";
  
  const [formState, setFormState] = useState({
    machineId,
    date: new Date().toISOString().slice(0, 10),
    technicianName: "",
    technicianId: "",
    maintenanceType: "scheduled",
    description: "",
    actions: "",
    remarks: "",
  });
  
  const [replacedParts, setReplacedParts] = useState<string[]>([]);
  const [customParts, setCustomParts] = useState<{ name: string; code: string }[]>([]);
  const [newCustomPart, setNewCustomPart] = useState({ name: "", code: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const togglePart = (partId: string) => {
    setReplacedParts(prev => 
      prev.includes(partId) 
        ? prev.filter(id => id !== partId) 
        : [...prev, partId]
    );
  };
  
  const addCustomPart = () => {
    if (newCustomPart.name && newCustomPart.code) {
      setCustomParts(prev => [...prev, { ...newCustomPart }]);
      setNewCustomPart({ name: "", code: "" });
    }
  };
  
  const removeCustomPart = (index: number) => {
    setCustomParts(prev => prev.filter((_, i) => i !== index));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Get parts info
    const parts = [
      ...replacedParts.map(id => PARTS.find(p => p.id === id)).filter(Boolean),
      ...customParts,
    ];
    
    // Simulate API call
    setTimeout(() => {
      console.log("Maintenance logged:", {
        ...formState,
        replacedParts: parts,
      });
      
      setIsSubmitting(false);
      
      toast({
        title: "Maintenance Logged",
        description: "The maintenance record has been saved successfully.",
        duration: 5000,
      });
      
      navigate("/maintenance");
    }, 1000);
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <Wrench className="mr-2 h-5 w-5" /> 
          Log Maintenance
        </CardTitle>
        <CardDescription>
          Record details of the maintenance performed
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex items-center space-x-4 bg-muted p-3 rounded-md">
            <Coffee className="h-5 w-5 text-primary" />
            <div className="text-sm">
              <span className="block font-medium">Machine ID: {machineId || "Not specified"}</span>
              {!machineId && (
                <span className="text-xs text-muted-foreground">
                  No machine selected. You can continue, but please specify the machine.
                </span>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Maintenance Date *</Label>
              <div className="relative">
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formState.date}
                  onChange={handleChange}
                  required
                />
                <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="maintenanceType">Maintenance Type *</Label>
              <Select 
                value={formState.maintenanceType} 
                onValueChange={(value) => handleSelectChange("maintenanceType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="repair">Repair</SelectItem>
                  <SelectItem value="emergency">Emergency</SelectItem>
                  <SelectItem value="installation">Installation</SelectItem>
                  <SelectItem value="upgrade">Upgrade</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="technicianName">Technician Name *</Label>
              <Input
                id="technicianName"
                name="technicianName"
                placeholder="Enter your name"
                value={formState.technicianName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="technicianId">Technician ID *</Label>
              <Input
                id="technicianId"
                name="technicianId"
                placeholder="Enter your ID"
                value={formState.technicianId}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Replaced Parts</Label>
            <div className="bg-muted p-4 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                {PARTS.map((part) => (
                  <div key={part.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`part-${part.id}`}
                      checked={replacedParts.includes(part.id)}
                      onCheckedChange={() => togglePart(part.id)}
                    />
                    <Label htmlFor={`part-${part.id}`} className="text-sm cursor-pointer">
                      {part.name} ({part.code})
                    </Label>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 border-t border-border pt-4">
                <Label className="text-sm mb-2 block">Add Custom Part</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Part Name"
                    value={newCustomPart.name}
                    onChange={(e) => setNewCustomPart(prev => ({ ...prev, name: e.target.value }))}
                    className="flex-1"
                  />
                  <Input
                    placeholder="Part Code"
                    value={newCustomPart.code}
                    onChange={(e) => setNewCustomPart(prev => ({ ...prev, code: e.target.value }))}
                    className="flex-1"
                  />
                  <Button 
                    type="button" 
                    onClick={addCustomPart} 
                    size="sm" 
                    variant="outline"
                    disabled={!newCustomPart.name || !newCustomPart.code}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {customParts.length > 0 && (
                <div className="mt-4">
                  <Label className="text-sm mb-2 block">Custom Parts</Label>
                  {customParts.map((part, index) => (
                    <div key={index} className="flex items-center justify-between py-1">
                      <span className="text-sm">
                        {part.name} ({part.code})
                      </span>
                      <Button
                        type="button"
                        onClick={() => removeCustomPart(index)}
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe the issue or reason for maintenance"
              value={formState.description}
              onChange={handleChange}
              required
              className="min-h-[80px]"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="actions">Actions Performed *</Label>
            <Textarea
              id="actions"
              name="actions"
              placeholder="Describe the actions taken"
              value={formState.actions}
              onChange={handleChange}
              required
              className="min-h-[80px]"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="remarks">Remarks</Label>
            <Textarea
              id="remarks"
              name="remarks"
              placeholder="Any additional comments or recommendations"
              value={formState.remarks}
              onChange={handleChange}
              className="min-h-[80px]"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full mt-6" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Log Maintenance"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
