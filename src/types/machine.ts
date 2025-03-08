
export interface Machine {
  id: string;
  name: string;
  model: string;
  serial_number: string;
  location: string;
  installed_date: string;
  last_service?: string;
  next_service_due?: string;
  status: "operational" | "needs_service" | "out_of_order";
  image?: string;
  owner_id?: string;
  created_at?: string;
  updated_at?: string;
}

export interface MaintenanceRecord {
  id: string;
  machine_id: string;
  date: string;
  type: "Routine" | "Repair" | "Inspection";
  technician: string;
  parts: string[];
  notes?: string;
  user_id?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Profile {
  id: string;
  name?: string;
  email?: string;
  role: "admin" | "technician" | "customer";
  company?: string;
  avatar_url?: string;
  created_at?: string;
  updated_at?: string;
}
