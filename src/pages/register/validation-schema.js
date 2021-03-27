import * as Yup from 'yup';
import { ALPHABETIC_WITH_DASH } from 'constant/regex';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Minimum 2 characters.')
    .max(50, 'Maximum 50 characters.')
    .matches(ALPHABETIC_WITH_DASH, { message: 'Invalid field.', excludeEmptyString: true })
    .required('Required.'),
  surname: Yup.string()
    .min(2, 'Minimum 2 characters.')
    .max(50, 'Maximum 50 characters.')
    .matches(ALPHABETIC_WITH_DASH, { message: 'Invalid field.', excludeEmptyString: true })
    .required('Required.'),
  email: Yup.string().email('Invalid email.').required('Required.'),
  password: Yup.string()
    .required('Required.')
    .min(6, 'Minimum 6 characters.')
    .max(50, 'Maximum 50 characters.'),
  confirmPassword: Yup.string()
    .required('Required.')
    .min(6, 'Minimum 6 characters.')
    .when('password', {
      is: val => !!(val && val.length > 0),
      then: Yup.string().oneOf([Yup.ref('password')], "Passwords don't match."),
    }),
  terms: Yup.bool().oneOf([true], 'You need to accept the terms and conditions'),
});

export default validationSchema;
