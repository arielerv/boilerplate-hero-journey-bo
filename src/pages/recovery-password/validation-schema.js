import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email.').required('Required.'),
});

export default validationSchema;
