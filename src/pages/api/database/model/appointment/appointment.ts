import { Model } from 'sequelize/types';
import { AppointmentEntity } from '../../../../../entities/appointment';
import { ModelCreatorFunc } from '../../interface';

const appointmentModel: ModelCreatorFunc<AppointmentEntity> = (sequelize, type) => {
  const AppointmentModel = sequelize.define<Model<AppointmentEntity>>('appointment', {
    id: {
      type: type.UUID,
      defaultValue: type.UUIDV4,
      primaryKey: true,
    },
    userPatientId: {
      type: type.UUID,
      allowNull: false,
    },
    clinicId: {
      type: type.UUID,
      allowNull: false,
    },
    probableStartTime: {
      type: type.TIME,
      allowNull: false,
    },
    actualEndTime: {
      type: type.TIME,
      allowNull: true,
    },
    appointmentStatusId: {
      type: type.UUID,
      allowNull: false,
    },
    appointmentTakenDate: {
      type: type.DATE,
      allowNull: false,
    },
    appBookingChannelId: {
      type: type.UUID,
      allowNull: false,
    },
  });

  return AppointmentModel;
};

export default appointmentModel;
