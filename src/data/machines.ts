
import { Machine } from "@/types/machine";

// Mock machines data
export const machines: Machine[] = [
  {
    id: "m1",
    name: "Downtown Café",
    model: "La Marzocco Linea PB",
    serialNumber: "LM-2023-1234",
    location: "123 Main St, Downtown",
    installedDate: "2023-01-15",
    lastService: "2023-05-10",
    nextServiceDue: "2023-08-10",
    status: "operational",
    image: "/images/machine-1.jpg"
  },
  {
    id: "m2",
    name: "Riverfront Bistro",
    model: "Rocket Appartamento",
    serialNumber: "RA-2022-5678",
    location: "456 River Ave, Eastside",
    installedDate: "2022-11-20",
    lastService: "2023-04-22",
    nextServiceDue: "2023-07-22",
    status: "needs_service",
    image: "/images/machine-2.jpg"
  },
  {
    id: "m3",
    name: "Tech Hub Café",
    model: "Rancilio Classe 11",
    serialNumber: "RC-2023-8765",
    location: "789 Tech Blvd, Innovation District",
    installedDate: "2023-03-05",
    lastService: "2023-06-02",
    nextServiceDue: "2023-09-02",
    status: "operational",
    image: "/images/machine-3.jpg"
  },
  {
    id: "m4",
    name: "University Coffee Shop",
    model: "Nuova Simonelli Aurelia Wave",
    serialNumber: "NS-2022-4321",
    location: "101 Campus Drive, University District",
    installedDate: "2022-08-12",
    lastService: "2023-02-15",
    nextServiceDue: "2023-07-05",
    status: "out_of_order",
    image: "/images/machine-4.jpg"
  }
];
