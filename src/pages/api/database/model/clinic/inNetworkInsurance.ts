import { Model } from 'sequelize/types';
import { InNetworkInsuranceEntity } from '../../../../../entities/clinic';
import { ModelCreatorFunc } from '../../interface';

const inNetworkInsuranceModel: ModelCreatorFunc<InNetworkInsuranceEntity> = (sequelize, type) => {
  const InNetworkInsuranceModel = sequelize.define<Model<InNetworkInsuranceEntity>>(
    'inNetworkInsurance',
    {
      id: {
        type: type.UUID,
        defaultValue: type.UUIDV4,
        primaryKey: true,
      },
      insuranceName: {
        type: type.UUID,
        allowNull: false,
      },
      clinicId: {
        type: type.UUID,
        allowNull: false,
      },
    },
  );

  return InNetworkInsuranceModel;
};

export default inNetworkInsuranceModel;
