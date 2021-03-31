import { DataTypes, Sequelize } from 'sequelize';
import { Models, Sqlize } from './interface';

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

interface DB {
  Sequelize: typeof Sqlize;
  sequelize: Sqlize;
  models: Models;
}

const db: DB = {
  Sequelize: Sequelize as typeof Sqlize,
  sequelize,
  models: {
    appointment: appointmentModel(sequelize, DataTypes),
    appBookingChannel: appBookingChannelModel(sequelize, DataTypes),
    appointmentStatus: appointmentStatusModel(sequelize, DataTypes),
    doctor: doctorModel(sequelize, DataTypes),
    doctorSpecialization: doctorSpecializationModel(sequelize, DataTypes),
    hospitalAffiliation: hospitalAffiliationModel(sequelize, DataTypes),
    inNetworkInsurance: inNetworkInsuranceModel(sequelize, DataTypes),
    clinic: clinicModel(sequelize, DataTypes),
    clinicDoctorAvailability: clinicClinicAvailabilityModel(sequelize, DataTypes),
    patientAccount: patientAccountModel(sequelize, DataTypes),
    patientReview: patientReviewModel(sequelize, DataTypes),
    qualification: qualificationModel(sequelize, DataTypes),
    specialization: specializationModel(sequelize, DataTypes),
  },
};

export default db;
