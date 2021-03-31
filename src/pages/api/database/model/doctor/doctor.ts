import { Model } from 'sequelize/types';
import { DoctorEntity } from '../../../../../entities/doctor';
import { ModelCreatorFunc } from '../../interface';

const doctorModel: ModelCreatorFunc<DoctorEntity> = (sequelize, type) => {
  const DoctorModel = sequelize.define<Model<DoctorEntity>>('doctor', {
    id: {
      type: type.UUID,
      defaultValue: type.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: type.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: type.STRING(50),
      allowNull: false,
    },
    professionalStatement: {
      type: type.STRING(4000),
      allowNull: false,
    },
    practicingFrom: {
      type: type.DATE,
      allowNull: false,
    },
  });

  return DoctorModel;
};

export default doctorModel;
