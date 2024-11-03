"use client"
import { Button, DatePicker, Form, Input, InputNumber } from 'antd';
import React from 'react';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
import emailjs from '@emailjs/browser';

const SigninPage: React.FC = () => {
  const [form] = Form.useForm(); // Step 1: Create a form instance

  const onFormSubmit = (values: any) => {


      console.log('Received values from form: ', values); // Step 3: Handle form data on submit

      // const template={
      //   to_name:"Owner",
      //   from_name:"Mirza",
      //   message:   `Input: ${values.Input},
      //               InputNumber: ${values.InputNumber},
      //               TextArea: ${values.TextArea}, 
      //               Date Range: ${values.RangePicker}`,
      // }
    
      // emailjs
      // .send('service_szonars', 'template_snq7p6q', template, {
      //   publicKey: 'ztknCVO9n5dsTy1FC',
      // })
      // .then(
      //   () => {
      //     console.log('SUCCESS!');
      //   },
      //   (error) => {
      //     console.log('FAILED...', error.text);
      //   },
      // );

  };

 

  return (
    <div>
         <Form
      form={form} // Step 2: Use form instance for this form
      onFinish={onFormSubmit} // Step 3: Specify the onFinish function
      
    >
      <Form.Item
        label="Input"
        name="Input"
        rules={[{ required: true, message: 'Please input!' }]}
         
      >
        <Input className='!text-slate-600' />
      </Form.Item>

      <Form.Item
        label="InputNumber"
        name="InputNumber"
        rules={[{ required: true, message: 'Please input a number!' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="TextArea"
        name="TextArea"
        rules={[{ required: true, message: 'Please input text!' }]}
      >
        <TextArea />
      </Form.Item>

      <Form.Item
        label="RangePicker"
        name="RangePicker"
        rules={[{ required: true, message: 'Please select a date range!' }]}
      >
        <RangePicker />
      </Form.Item>

     
        <Button type="primary" className='text-amber-500  bg-black' htmlType="submit" >
          Submit
        </Button>
  
    </Form> 
    <button className='text-red-600'>hi</button>
    </div>

  );
};

export default SigninPage;
