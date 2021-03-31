import { gql } from 'apollo-server-core';

export const patientSchema = gql`
  type PatientAccount {
    id: ID
    firstName: String
    lastName: String
    contactNumber: String
    email: String
  }

  type PatientReview {
    id: ID
    userPatientId: ID
    doctorId: ID
    isReviewAnonymous: Int
    waitTimeRating: String
    bedsideMannerRating: String
    overallRating: String
    review: String
    isDoctorRecommended: String
    reviewDate: String
  }
`;
