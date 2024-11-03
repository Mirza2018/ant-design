"use client"
import { useFormik,Formik,Field,Form } from 'formik';
import Image from 'next/image';
import React from 'react';
import RegisterValidation from './RegisterValidation';



const initialValues={
    name:'',
    email:'',
    password:'',
    confirmPassword:''
}
const Register = () => {
//    const {values,handleBlur,handleChange,handleSubmit,errors}= useFormik({
//         initialValues:initialValues,
//         validationSchema:RegisterValidation,
//         onSubmit:(values)=>{
//             console.log(values);
//         }
//     })
console.log(initialValues);




    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex flex-col lg:flex-row items-center w-full max-w-5xl p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 p-4">
                    <Image src="/images/about-us.jpg" width={500} height={500} alt="Illustration" className="w-full h-auto object-cover rounded-lg" />
                </div>
                
                {/* Form Section */}
                <Formik 
                initialValues={initialValues}
                validationSchema={RegisterValidation}
                onSubmit={values=>{
                    console.log(values);
                    
                }}
                >
                    {({errors})=>(
                      <Form className="w-full lg:w-1/2 p-6" >
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                        {/* <input
                            id="name"
                            className="mt-1 block w-full border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
                            type="text"
                            name="name"
                            value={values.name}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        /> */}
                        <Field type="text" name="name"   className="mt-1 block w-full border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none focus:ring " >

                        </Field>
                    </div>
                    {errors.name && <small>{errors.name}</small>}

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                        {/* <input
                            id="email"
                            className="mt-1 block w-full border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
                            type="email"
                            name="email"
                            value={values.email}
                            autoComplete="additional-name webauthn"
                            onBlur={handleBlur}
                            onChange={handleChange}
                        /> */}
                         <Field type="email" name="email"   className="mt-1 block w-full border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none focus:ring " >

                        </Field>
                    </div>
                    {errors.email && <small>{errors.email}</small>}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                        {/* <input
                            id="password"
                            className="mt-1 block w-full border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
                            type="password"
                            name="password"
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        /> */}
                         <Field type="password" name="password"   className="mt-1 block w-full border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none focus:ring " >

                        </Field>
                    </div>
                    {errors.password && <small>{errors.password}</small>}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">Confirm Password</label>
                        {/* <input
                            id="confirmPassword"
                            className="mt-1 block w-full border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
                            type="password"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        /> */}
                         <Field type="password" name="confirmPassword"   className="mt-1 block w-full border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none focus:ring " >

                            </Field>
                    </div>
                    {errors.confirmPassword && <small>{errors.confirmPassword }</small>}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Register
                    </button>
                </Form>    
                    )}
              
                </Formik>
            </div>
        </div>
    );
};

export default Register;
