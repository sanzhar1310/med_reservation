import { Model } from 'sequelize/types';
import { ClinicEntity } from '../../../../../entities/clinic';
import { ModelCreatorFunc } from '../../interface';

const clinicModel: ModelCreatorFunc<ClinicEntity> = (sequelize, type) => {
  const ClinicModel = sequelize.define<Model<ClinicEntity>>('clinic', {
    id: {
      type: type.UUID,
      defaultValue: type.UUIDV4,
      primaryKey: true,
    },
    doctorId: {
      type: type.UUID,
      allowNull: false,
    },
    hospitalAffiliationId: {
      type: type.UUID,
      allowNull: true,
    },
    timeSlotPerClientInMin: {
      type: type.NUMBER,
      allowNull: true,
    },
    firstConsultationFee: {
      type: type.NUMBER,
      allowNull: true,
    },
    followupConsultationFee: {
      type: type.NUMBER,
      allowNull: true,
    },
    streetAddress: {
      type: type.STRING(500),
      allowNull: false,
    },
    country: {
      type: type.STRING(100),
      allowNull: false,
    },
    region: {
      type: type.STRING(100),
      allowNull: false,
    },
    city: {
      type: type.STRING(100),
      allowNull: false,
    },
    zip: {
      type: type.STRING(50),
      allowNull: false,
    },
  });

  return ClinicModel;
};

export default clinicModel;
