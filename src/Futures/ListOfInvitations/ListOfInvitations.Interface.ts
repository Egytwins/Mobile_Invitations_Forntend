export interface InvitationList {
  id: string;
  name: string;
  email?: string;
  zoneId?: string;
  buildingId?: string;
  documentIdname?: string;
  documentIdno?: string;
  companyId?: string;
  registrationDate: Date;
  registrationTime?: Date;
  success: Number;
}
