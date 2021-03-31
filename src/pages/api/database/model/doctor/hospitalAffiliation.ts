import { Model } from 'sequelize/types';
import { HospitalAffiliationEntity } from '../../../../../entities/doctor';
import { ModelCreatorFunc } from '../../interface';

const hospitalAffiliationModel: ModelCreatorFunc<HospitalAffiliationEntity> = (sequelize, type) => {
  const HospitalAffiliationModel = sequelize.define<Model<HospitalAffiliationEntity>>(
    'hospitalAffiliation',
    {
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
    },
  );

  return HospitalAffiliationModel;
};

export default hospitalAffiliationModel;
