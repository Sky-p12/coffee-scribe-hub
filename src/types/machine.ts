
export interface Machine {
  id: string;
  name: string;
  model: string;
  serialNumber: string;
  location: string;
  installedDate: string;
  lastService?: string;
  nextServiceDue?: string;
  status: "operational" | "needs_service" | "out_of_order";
  image?: string;
}
