export interface PatientAccountEntity {
  id: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
}

export interface PatientReviewEntity {
  id: string;
  userPatientId: string;
  doctorId: string;
  isReviewAnonymous: number;
  waitTimeRating?: string;
  bedsideMannerRating?: string;
  overallRating?: string;
  review?: string;
  isDoctorRecommended?: string;
  reviewDate: string;
}
