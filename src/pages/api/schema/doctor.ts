import { gql } from 'apollo-server-core';

export const doctorSchema = gql`
  type Doctor {
    id: ID
    firstName: String
    lastName: String
    professionalStatement: String
    practicingFrom: String
  }

  type DoctorSpecialization {
    id: ID
    specializationId: ID
    doctorId: ID
  }

  type HospitalAffiliation {
    id: ID
    doctorId: ID
    qualificationName: String
    instituteName: String
    procurementYear: String
  }

  type Qualification {
    id: ID
    doctorId: ID
    qualificationName: String
    instituteName: String
    procurementYear: String
  }

  type Specialization {
    id: ID
    specializationName: String
  }
`;
