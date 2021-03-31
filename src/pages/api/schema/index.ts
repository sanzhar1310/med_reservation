import { gql, mergeSchemas } from 'apollo-server-micro';
import { appointmentSchema } from './appointment';
import { clinicSchema } from './clinic';
import { doctorSchema } from './doctor';
import { patientSchema } from './patient';

const querySchema = gql`
  type Query {
    test: String
  }
`;

export const schema = mergeSchemas({
  schemas: [querySchema, appointmentSchema, clinicSchema, doctorSchema, patientSchema],
});
