import { Model } from 'sequelize/types';
import { AppBookingChannelEntity } from '../../../../../entities/appointment';
import { ModelCreatorFunc } from '../../interface';

const appBookingChannelModel: ModelCreatorFunc<AppBookingChannelEntity> = (sequelize, type) => {
  const AppBookingChannelModel = sequelize.define<Model<AppBookingChannelEntity>>(
    'appBookingChannel',
    {
      id: {
        type: type.UUID,
        defaultValue: type.UUIDV4,
        primaryKey: true,
      },
      appBookingChannelName: {
        type: type.STRING(50),
        allowNull: false,
      },
    },
  );

  return AppBookingChannelModel;
};

export default appBookingChannelModel;
