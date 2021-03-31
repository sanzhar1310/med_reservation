export interface DoctorEntity {
  id: string;
  firstName: string;
  lastName: string;
  professionalStatement: string;
  practicingFrom: string;
}

export interface DoctorSpecializationEntity {
  id: string;
  specializationId: string;
  doctorId: string;
}

export interface HospitalAffiliationEntity {
  id: string;
  doctorId: string;
  qualificationName: string;
  instituteName: string;
  procurementYear: string;
}

export interface QualificationEntity {
  id: string;
  doctorId: string;
  qualificationName: string;
  instituteName: string;
  procurementYear: string;
}

export interface SpecializationEntity {
  id: string;
  specializationName: string;
}
