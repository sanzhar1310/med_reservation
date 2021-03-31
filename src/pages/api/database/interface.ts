import DataType from 'sequelize/types/lib/data-types';
import { Model, ModelCtor, Sequelize } from 'sequelize/types';
import {
  DoctorEntity,
  DoctorSpecializationEntity,
  HospitalAffiliationEntity,
  QualificationEntity,
  SpecializationEntity,
} from '../../../entities/doctor';
import { PatientAccountEntity, PatientReviewEntity } from '../../../entities/patient';
import {
  InNetworkInsuranceEntity,
  ClinicDoctorAvailabilityEntity,
  ClinicEntity,
} from '../../../entities/clinic';
import {
  AppBookingChannelEntity,
  AppointmentEntity,
  AppointmentStatusEntity,
} from '../../../entities/appointment';

export interface Models {
  doctor: ModelCtor<Model<DoctorEntity>>;
  doctorSpecialization: ModelCtor<Model<DoctorSpecializationEntity>>;
  hospitalAffiliation: ModelCtor<Model<HospitalAffiliationEntity>>;
  qualification: ModelCtor<Model<QualificationEntity>>;
  specialization: ModelCtor<Model<SpecializationEntity>>;
  patientAccount: ModelCtor<Model<PatientAccountEntity>>;
  patientReview: ModelCtor<Model<PatientReviewEntity>>;
  clinic: ModelCtor<Model<ClinicEntity>>;
  clinicDoctorAvailability: ModelCtor<Model<ClinicDoctorAvailabilityEntity>>;
  inNetworkInsurance: ModelCtor<Model<InNetworkInsuranceEntity>>;
  appointment: ModelCtor<Model<AppointmentEntity>>;
  appointmentStatus: ModelCtor<Model<AppointmentStatusEntity>>;
  appBookingChannel: ModelCtor<Model<AppBookingChannelEntity>>;
  [key: string]: ModelCtor<Model>;
}

export class Sqlize extends Sequelize {
  public readonly models!: Models;
}

export interface ModelCreatorFunc<ModelAttributes = unknown> {
  (sequelize: Sqlize, type: typeof DataType): ModelCtor<Model<ModelAttributes>>;
}
