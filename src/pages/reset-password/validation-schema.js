import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required.')
    .min(6, 'Minimum 6 characters.')
    .max(50, 'Maximum 50 characters.'),
});

export default validationSchema;
