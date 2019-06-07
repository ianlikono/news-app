/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import {
 Button, Checkbox, Form, Icon, Input, message, Tooltip 
} from 'antd';
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
 facebookProvider, fire, googleProvider, twitterProvider 
} from '../../../firebase';
import { SocialIcons } from './styles';

const StyledForm = styled(Form)`
       .login-form {
           /* max-width: 300px; */
           display: flex;
           align-items: center;
           height: 100%;
       }
       .login-form-forgot {
           float: right;
       }
       .login-form-button {
           width: 100%;
       }
   `;

const SignupForm = (props) => {
  const { getFieldDecorator } = props.form;
  const [confirmDirty, setConfirmDirty] = useState(false);

  function compareToFirstPassword(rule, value, callback) {
    const form = props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enterd is inconsistent!');
    } else {
      callback();
    }
  }

  function validateToNextPassword(rule, value, callback) {
    const form = props.form;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  function handleConfirmBlur(e) {
    const value = e.target.value;
    setConfirmDirty(confirmDirty || !!value);
  }


  async function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const response = await fire.auth().createUserWithEmailAndPassword(values.Email, values.password);
          if (response) {
            props.history.push('/login');
          }
        } catch (error) {
          message.error(error.message);
        }
      }
    });
  }

  async function onGoogleClick() {
    try {
      const response = await fire.auth().signInWithPopup(googleProvider);
      if (response) {
        props.history.push('/');
      }
    } catch (error) {
      message.error(error.message);
    }
  }

  async function onFacebookClicked() {
    try {
      const response = await fire.auth().signInWithPopup(facebookProvider);
      if (response) {
        props.history.push('/');
      }
    } catch (error) {
      message.error(error.message);
    }
  }

  async function onTwitterClicked() {
    try {
      const response = await fire.auth().signInWithPopup(twitterProvider);
      if (response) {
        props.history.push('/');
      }
    } catch (error) {
      message.error(error.message);
    }
  }
  return (
    <StyledForm onSubmit={handleSubmit} className="login-form">
      <h2>Register</h2>
      <Form.Item label="Email" hasFeedback>
        {getFieldDecorator('Email', {
          rules: [{ required: true, message: 'Please input your email!' }, {
            type: 'email',
            message: 'The input is not valid E-mail!',
          }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Enter your email address"
          />,
        )}
      </Form.Item>
      <Form.Item label="Password" hasFeedback>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }, {
            validator: validateToNextPassword,
          }],
        })(
          <Input.Password
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Enter your Password"
          />,
        )}
      </Form.Item>
      <Form.Item label="Confirm Password" hasFeedback>
        {getFieldDecorator('confirm', {
          rules: [{ required: true, message: 'Please confirm your password!' }, {
            validator: compareToFirstPassword,
          }],
        })(
          <Input.Password
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Confirm Password"
            onBlur={handleConfirmBlur}
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)}
        <Button type="primary" htmlType="submit" className="login-form-button">
             Register
        </Button>
      </Form.Item>
      <div>
        <h3 style={{ textAlign: 'center' }}>Or via social network</h3>
      </div>
      <SocialIcons>
        <Tooltip placement="bottomLeft" title="Continue With Google">
          <Button onClick={onGoogleClick} type="primary" shape="circle" icon="google" />
        </Tooltip>
        <Tooltip placement="bottomLeft" title="Continue With Facebook">
          <Button onClick={onFacebookClicked} type="primary" shape="circle" icon="facebook" />
        </Tooltip>
        <Tooltip placement="bottomLeft" title="Continue With Twitter">
          <Button onClick={onTwitterClicked} type="primary" shape="circle" icon="twitter" />
        </Tooltip>
      </SocialIcons>
      {' '}
      <div style={{ marginTop: '3rem' }}>
        <Link className="login-form-forgot" to="/login">Already have an account? login now!</Link>
      </div>
    </StyledForm>
  );
};

const WrappedNormalSignupForm = Form.create({ name: 'normal_login' })(SignupForm);

export default withRouter(WrappedNormalSignupForm);
