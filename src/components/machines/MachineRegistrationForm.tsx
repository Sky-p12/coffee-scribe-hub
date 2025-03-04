
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { QRCode, QRCodeDownload } from "@/components/ui-custom/QRCode";
import { Package, CalendarIcon, Download, Printer, Share2 } from "lucide-react";

export function MachineRegistrationForm() {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formState, setFormState] = useState({
    machineNumber: "",
    model: "",
    client: "",
    location: "",
    installDate: new Date().toISOString().slice(0, 10),
    status: "operational",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [machineId, setMachineId] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Generate a mock machine ID (in real app this would come from the backend)
      const newMachineId = `MCH-${Date.now().toString().slice(-8)}`;
      setMachineId(newMachineId);
      
      setIsSubmitting(false);
      setRegistrationComplete(true);
      
      toast({
        title: "Machine Registered",
        description: `Machine ${formState.machineNumber} has been successfully registered.`,
        duration: 5000,
      });
    }, 1000);
  };
  
  const handleFinish = () => {
    navigate("/machines");
  };
  
  if (registrationComplete) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Registration Complete</CardTitle>
          <CardDescription>
            Machine {formState.machineNumber} has been registered
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-4">
            <QRCode 
              value={`https://coffee-sav.com/machines/${machineId}`} 
              size={220}
              className="mb-4"
            />
            <div className="text-sm text-center text-muted-foreground mb-6">
              Scan this QR code to access machine information
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              <QRCodeDownload
                value={`https://coffee-sav.com/machines/${machineId}`}
                fileName={`machine-${formState.machineNumber}`}
                size={1200}
              >
                <Button size="sm" variant="outline" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download QR
                </Button>
              </QRCodeDownload>
              
              <Button size="sm" variant="outline" className="flex items-center">
                <Printer className="mr-2 h-4 w-4" />
                Print QR
              </Button>
              
              <Button size="sm" variant="outline" className="flex items-center">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleFinish} className="w-full">
            Continue
          </Button>
        </CardFooter>
      </Card>
    );
  }
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <Package className="mr-2 h-5 w-5" /> 
          Register New Machine
        </CardTitle>
        <CardDescription>
          Enter the details of the new coffee machine
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="machineNumber">Machine Number *</Label>
              <Input
                id="machineNumber"
                name="machineNumber"
                placeholder="e.g. MCH001"
                value={formState.machineNumber}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="model">Model *</Label>
              <Input
                id="model"
                name="model"
                placeholder="e.g. Espresso Pro X1"
                value={formState.model}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="client">Client Name *</Label>
              <Input
                id="client"
                name="client"
                placeholder="e.g. Acme Cafe"
                value={formState.client}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                name="location"
                placeholder="e.g. 123 Main St, New York"
                value={formState.location}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="installDate">Installation Date *</Label>
              <div className="relative">
                <Input
                  id="installDate"
                  name="installDate"
                  type="date"
                  value={formState.installDate}
                  onChange={handleChange}
                  required
                />
                <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="status">Status *</Label>
              <Select 
                value={formState.status} 
                onValueChange={(value) => handleSelectChange("status", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="operational">Operational</SelectItem>
                  <SelectItem value="needs-service">Needs Service</SelectItem>
                  <SelectItem value="under-repair">Under Repair</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full mt-6" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register Machine"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
