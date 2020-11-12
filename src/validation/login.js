import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required.'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .max(30, 'We prefer insecure system, try a shorter password.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});
