import { Model } from 'sequelize/types';
import { AppointmentStatusEntity } from '../../../../../entities/appointment';
import { ModelCreatorFunc } from '../../interface';

const appointmentStatusModel: ModelCreatorFunc<AppointmentStatusEntity> = (sequelize, type) => {
  const AppointmentStatusModel = sequelize.define<Model<AppointmentStatusEntity>>(
    'appointmentStatus',
    {
      id: {
        type: type.UUID,
        defaultValue: type.UUIDV4,
        primaryKey: true,
      },
      status: {
        type: type.STRING(10),
        allowNull: false,
      },
    },
  );

  return AppointmentStatusModel;
};

export default appointmentStatusModel;
