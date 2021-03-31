import { Model } from 'sequelize/types';
import { DoctorSpecializationEntity } from '../../../../../entities/doctor';
import { ModelCreatorFunc } from '../../interface';

const doctorSpecializationModel: ModelCreatorFunc<DoctorSpecializationEntity> = (
  sequelize,
  type,
) => {
  const SpecializationModel = sequelize.define<Model<DoctorSpecializationEntity>>(
    'doctorSpecialization',
    {
      id: {
        type: type.UUID,
        defaultValue: type.UUIDV4,
        primaryKey: true,
      },
      specializationId: {
        type: type.UUID,
        allowNull: false,
      },
      doctorId: {
        type: type.UUID,
        allowNull: false,
      },
    },
  );

  return SpecializationModel;
};

export default doctorSpecializationModel;
