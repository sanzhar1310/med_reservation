export interface ClinicEntity {
  id: string;
  doctorId: string;
  hospitalAffiliationId: string;
  timeSlotPerClientInMin: string;
  firstConsultationFee?: string;
  followupConsultationFee?: string;
  country: string;
  region: string; // state
  city: string;
  streetAddress: string;
  zip: string;
}

export interface ClinicDoctorAvailabilityEntity {
  id: string;
  clinicId: string;
  dayOfWeek: string;
  startTime: string;
  endTime?: string;
  isAvailable?: string;
  reasonOfUnavailability: string;
}

export interface InNetworkInsuranceEntity {
  id: string;
  insuranceName: string;
  clinicId: string;
}
