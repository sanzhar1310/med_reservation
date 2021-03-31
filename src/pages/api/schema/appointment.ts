import { gql } from 'apollo-server-core';

export const appointmentSchema = gql`
  type Appointment {
    id: ID
    userPatientId: String
    clinicId: String
    probableStartTime: String
    actualEndTime: String
    appointmentStatusId: String
    appointmentTakenDate: String
    appBookingChannelId: String
  }

  type AppBookingChannel {
    id: ID
    appBookingChannelName: String
  }

  enum AppointmentStatusEnum {
    active
    canceled
    complete
  }

  type AppointmentStatus {
    id: ID
    status: AppointmentStatusEnum
  }
`;
