import { Model } from 'sequelize/types';
import { QualificationEntity } from '../../../../../entities/doctor';
import { ModelCreatorFunc } from '../../interface';

const qualificationModel: ModelCreatorFunc<QualificationEntity> = (sequelize, type) => {
  const QualificationModel = sequelize.define<Model<QualificationEntity>>('qualification', {
    id: {
      type: type.UUID,
      defaultValue: type.UUIDV4,
      primaryKey: true,
    },
    doctorId: {
      type: type.UUID,
      allowNull: false,
    },
    qualificationName: {
      type: type.STRING(50),
      allowNull: false,
    },
    instituteName: {
      type: type.STRING(4000),
      allowNull: false,
    },
    procurementYear: {
      type: type.DATE,
      allowNull: false,
    },
  });

  return QualificationModel;
};

export default qualificationModel;
