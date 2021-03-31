import { Model } from 'sequelize/types';
import { PatientReviewEntity } from '../../../../../entities/patient';
import { ModelCreatorFunc } from '../../interface';

const patientReviewModel: ModelCreatorFunc<PatientReviewEntity> = (sequelize, type) => {
  const PatientModel = sequelize.define<Model<PatientReviewEntity>>('patientReview', {
    id: {
      type: type.UUID,
      defaultValue: type.UUIDV4,
      primaryKey: true,
    },
    userPatientId: {
      type: type.UUID,
      allowNull: false,
    },
    doctorId: {
      type: type.UUID,
      allowNull: false,
    },
    isReviewAnonymous: {
      type: type.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    waitTimeRating: {
      type: type.NUMBER,
      allowNull: true,
    },
    bedsideMannerRating: {
      type: type.NUMBER,
      allowNull: true,
    },
    overallRating: {
      type: type.NUMBER,
      allowNull: true,
    },
    review: {
      type: type.STRING(2000),
      allowNull: true,
    },
    isDoctorRecommended: {
      type: type.BOOLEAN,
      allowNull: true,
    },
    reviewDate: {
      type: type.DATE,
      allowNull: false,
    },
  });

  return PatientModel;
};

export default patientReviewModel;
