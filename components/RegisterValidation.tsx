import React from 'react';
import * as Yup from 'yup'
     
const RegisterValidation = Yup.object ({
   name:Yup.string().min(3).required("please Enter name"),
   email:Yup.string().email("please Enter Valid email").required("please Enter email"),
   password:Yup.string().min(6).required('Please Enter Your Password'),
   confirmPassword:Yup.string().oneOf([Yup.ref("password")],"Password not matched").required("Plase Enter Confirm Password")
});

export default RegisterValidation;