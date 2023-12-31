import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const signupSchema = yup.object().shape({
  companyName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  address: yup.string().required(),
  password: yup.string().min(8).max(32).required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
});

export const signinSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});
export const addStaffSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  address: yup.string().required(),
  gender: yup.string().required(),
  status: yup.string().required(),
  department: yup.string().required(),
  jobTitle: yup.string().required(),
  age: yup.number().min(9).max(90),
});
