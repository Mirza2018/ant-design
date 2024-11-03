import { Button, Flex } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import SigninPage from '@/components/SigninPage';
import "./globals.css";
import Register from '@/components/Register';
const HomePage = () => {
  return (
    <div className=''>
      
     
    {/* <Flex gap="small" wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Flex> */}

{/* 
          <Button  type='primary'  icon={<SearchOutlined />}   iconPosition="end" >
            Hi everyone
          </Button>
          <Button color="danger" variant="solid"  size='middle'  >
            Solid
          </Button> */}

{/* <SigninPage/> */}
<Register/>

        
    </div>
  );
};

export default HomePage;