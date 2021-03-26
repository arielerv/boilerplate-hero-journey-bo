import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid.').required('Required.'),
  password: Yup.string().min(6, 'Minimum six chars.').required('Required.'),
});

export default validationSchema;
