import { gql } from 'apollo-server-core';

export const clinicSchema = gql`
  type Clinic {
    id: ID
    doctorId: ID
    hospitalAffiliationId: ID
    timeSlotPerClientInMin: String
    firstConsultationFee: String
    followupConsultationFee: String
    country: String
    region: String
    city: String
    streetAddress: String
    zip: String
  }

  type ClinicDoctorAvailability {
    id: ID
    clinicId: ID
    dayOfWeek: String
    startTime: String
    endTime: String
    isAvailable: String
    reasonOfUnavailability: String
  }

  type InNetworkInsurance {
    id: ID
    insuranceName: String
    clinicId: ID
  }
`;
