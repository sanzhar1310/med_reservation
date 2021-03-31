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
  Doctor: ModelCtor<Model<DoctorEntity>>;
  DoctorSpecialization: ModelCtor<Model<DoctorSpecializationEntity>>;
  HospitalAffiliation: ModelCtor<Model<HospitalAffiliationEntity>>;
  Qualification: ModelCtor<Model<QualificationEntity>>;
  Specialization: ModelCtor<Model<SpecializationEntity>>;
  PatientAccount: ModelCtor<Model<PatientAccountEntity>>;
  PatientReview: ModelCtor<Model<PatientReviewEntity>>;
  Clinic: ModelCtor<Model<ClinicEntity>>;
  ClinicDoctorAvailability: ModelCtor<Model<ClinicDoctorAvailabilityEntity>>;
  InNetworkInsurance: ModelCtor<Model<InNetworkInsuranceEntity>>;
  Appointment: ModelCtor<Model<AppointmentEntity>>;
  AppointmentStatus: ModelCtor<Model<AppointmentStatusEntity>>;
  AppBookingChannel: ModelCtor<Model<AppBookingChannelEntity>>;
  [key: string]: ModelCtor<Model>;
}

export class Sqlize extends Sequelize {
  public readonly models!: Models;
}

export interface DB {
  Sequelize: typeof Sqlize;
  sequelize: Sqlize;
  models: Models;
}

export interface ModelCreatorFunc<ModelAttributes = unknown> {
  (sequelize: Sqlize, type: typeof DataType): ModelCtor<Model<ModelAttributes>>;
}
