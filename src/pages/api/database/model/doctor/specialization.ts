import { Model } from 'sequelize/types';
import { SpecializationEntity } from '../../../../../entities/doctor';
import { ModelCreatorFunc } from '../../interface';

const specializationModel: ModelCreatorFunc<SpecializationEntity> = (sequelize, type) => {
  const SpecializationModel = sequelize.define<Model<SpecializationEntity>>('specialization', {
    id: {
      type: type.UUID,
      defaultValue: type.UUIDV4,
      primaryKey: true,
    },
    specializationName: {
      type: type.STRING(50),
      allowNull: false,
    },
  });

  return SpecializationModel;
};

export default specializationModel;
