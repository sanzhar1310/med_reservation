import { Model } from 'sequelize/types';
import { ModelCreatorFunc } from '../../interface';
import { ClinicDoctorAvailabilityEntity } from '../../../../../entities/clinic';

const clinicClinicAvailabilityModel: ModelCreatorFunc<ClinicDoctorAvailabilityEntity> = (
  sequelize,
  type,
) => {
  const ClinicClinicAvailabilityModel = sequelize.define<Model<ClinicDoctorAvailabilityEntity>>(
    'clinicDoctorAvailability',
    {
      id: {
        type: type.UUID,
        defaultValue: type.UUIDV4,
        primaryKey: true,
      },
      clinicId: {
        type: type.UUID,
        allowNull: false,
      },
      dayOfWeek: {
        type: type.STRING(20),
        allowNull: false,
      },
      startTime: {
        type: type.TIME,
        allowNull: false,
      },
      endTime: {
        type: type.TIME,
        allowNull: false,
      },
      isAvailable: {
        type: type.BOOLEAN,
        defaultValue: 1,
        allowNull: false,
      },
      reasonOfUnavailability: {
        type: type.STRING(500),
        allowNull: true,
      },
    },
  );

  return ClinicClinicAvailabilityModel;
};

export default clinicClinicAvailabilityModel;
