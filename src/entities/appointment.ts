export interface AppointmentEntity {
  id: string;
  userAccountId: string;
  clinicId: string;
  probableStartTime: string;
  actualEndTime: string;
  appointmentStatusId: string;
  appointmentTakenDate: string;
  appBookingChannelId: string;
}

export interface AppBookingChannelEntity {
  id: string;
  /**
   * The channel through which an appointment was booked.
   * There are multiple channels through which appointments are made:
   * - through the app
   * - by calling the hospital
   * - by calling the doctor or their clinic, etc.
   */
  appBookingChannelName: string;
}

export interface AppointmentStatusEntity {
  id: string;
  status: 'active' | 'canceled' | 'complete';
}
