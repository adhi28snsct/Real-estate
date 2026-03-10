export type PropertyType = "Apartment" | "Villa" | "Commercial";
export type LeadSource = "Website" | "WhatsApp" | "Property Portal" | "Call";
export type LeadStatus = "NEW" | "FOLLOW_UP" | "NEGOTIATION" | "CLOSED";

export interface Lead {
  id: string;
  name: string;
  phone: string;
  propertyType: PropertyType;
  budget: string; // AED format
  source: LeadSource;
  status: LeadStatus;
  createdAt: string;
}
