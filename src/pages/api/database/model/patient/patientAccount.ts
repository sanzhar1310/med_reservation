import { Model } from 'sequelize/types';
import { PatientAccountEntity } from '../../../../../entities/patient';
import { ModelCreatorFunc } from '../../interface';

const patientAccountModel: ModelCreatorFunc<PatientAccountEntity> = (sequelize, type) => {
  const PatientAccountModel = sequelize.define<Model<PatientAccountEntity>>('patientAccount', {
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
    contactNumber: {
      type: type.STRING(50),
    },
    email: {
      type: type.STRING(255),
    },
  });

  return PatientAccountModel;
};

export default patientAccountModel;
