import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',             
  properties: {                    
   address: {                    
      title: '地址',               
      type: 'string',              
      placeholder: '请输入您的地址', 
      required: true,              
    },
    date: {
      title: '日期',
      type: 'range',
      format: 'date',
      placeholder: ['请选择开始日期', '请选择结束日期'],
    },
    location: {
      title: '地区',
      type: 'string',
      enum: ['0', '1'],
      enumNames: ['国内', '国外'],
      widget: 'select',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (formData) => {
    console.log('formData', formData);
  }
 
  return (
    <>
      <FormRender schema={schema} form={form} onFinish={onFinish} />
      <Button onClick={form.submit} type="primary">提交</Button>
    </>
  );
};

export default Demo;