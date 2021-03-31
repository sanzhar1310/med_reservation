import { DataTypes, Sequelize } from 'sequelize';
import { DB, Sqlize } from './interface';

import appointmentModel from './model/appointment/appointment';
import appBookingChannelModel from './model/appointment/appBookingChannel';
import appointmentStatusModel from './model/appointment/appointmentStatus';
import doctorModel from './model/doctor/doctor';
import doctorSpecializationModel from './model/doctor/doctorSpecialization';
import hospitalAffiliationModel from './model/doctor/hospitalAffiliation';
import inNetworkInsuranceModel from './model/clinic/inNetworkInsurance';
import clinicModel from './model/clinic/clinic';
import clinicClinicAvailabilityModel from './model/clinic/clinicDoctorAvailability';
import patientAccountModel from './model/patient/patientAccount';
import patientReviewModel from './model/patient/patientReview';
import qualificationModel from './model/doctor/qualification';
import specializationModel from './model/doctor/specialization';
import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USERNAME,
} from '../configs/dbConfigs';

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}) as Sqlize;

const models = {
  Appointment: appointmentModel(sequelize, DataTypes),
  AppBookingChannel: appBookingChannelModel(sequelize, DataTypes),
  AppointmentStatus: appointmentStatusModel(sequelize, DataTypes),
  Doctor: doctorModel(sequelize, DataTypes),
  DoctorSpecialization: doctorSpecializationModel(sequelize, DataTypes),
  HospitalAffiliation: hospitalAffiliationModel(sequelize, DataTypes),
  InNetworkInsurance: inNetworkInsuranceModel(sequelize, DataTypes),
  Clinic: clinicModel(sequelize, DataTypes),
  ClinicDoctorAvailability: clinicClinicAvailabilityModel(sequelize, DataTypes),
  PatientAccount: patientAccountModel(sequelize, DataTypes),
  PatientReview: patientReviewModel(sequelize, DataTypes),
  Qualification: qualificationModel(sequelize, DataTypes),
  Specialization: specializationModel(sequelize, DataTypes),
};

models.Doctor.hasMany(models.Qualification, { foreignKey: 'doctorId' });
models.Doctor.belongsToMany(models.Specialization, {
  through: models.DoctorSpecialization,
  foreignKey: 'doctorId',
});
models.Doctor.hasMany(models.Clinic, { foreignKey: 'doctorId' });
models.Doctor.hasMany(models.PatientReview, { foreignKey: 'doctorId' });
models.Doctor.hasMany(models.HospitalAffiliation, { foreignKey: 'doctorId' });

models.HospitalAffiliation.hasMany(models.Clinic, { foreignKey: 'hospitalAffiliationId' });

models.Specialization.belongsToMany(models.Doctor, {
  through: models.DoctorSpecialization,
  foreignKey: 'specializationId',
});

models.PatientAccount.hasMany(models.PatientReview, { foreignKey: 'userPatientId' });
models.PatientAccount.hasMany(models.Appointment, { foreignKey: 'userPatientId' });

models.AppBookingChannel.hasMany(models.Appointment, {
  foreignKey: 'appBookingChannelId',
});

models.AppointmentStatus.hasMany(models.Appointment, {
  foreignKey: 'appointmentStatusId',
});

models.Clinic.hasMany(models.Appointment, { foreignKey: 'clinicId' });
models.Clinic.hasMany(models.ClinicDoctorAvailability, { foreignKey: 'clinicId' });
models.Clinic.hasMany(models.InNetworkInsurance, { foreignKey: 'clinicId' });

const db: DB = {
  Sequelize: Sequelize as typeof Sqlize,
  sequelize,
  models,
};

export default db;
