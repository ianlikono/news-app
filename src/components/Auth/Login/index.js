import { Card } from 'antd';
import React from 'react';
import styled from 'styled-components';
import loginPic from '../../../images/login.jpg';
import LoginForm from './form';
import {
 FieldsWrapper, InnerWrapper, LoginPic, PictureWrapper, Wrapper 
} from './styles';

const StyledCard = styled(Card)`
  margin-left: 20%;
  margin-right: 20%;
  @media (max-width: 600px) {
    margin-left: 0%;
    margin-right: 0%;
  }
  display: flex;
  background-color: ${props => props.theme.backgroundColor};
  width: 100%;
  .ant-card-body {
    width: 100%;
    padding: 0;
  }
`;

const Auth = () => (
  <Wrapper>
    <StyledCard>
      <InnerWrapper>
        <PictureWrapper>
          <LoginPic src={loginPic} alt="Login Pic" />
        </PictureWrapper>
        <FieldsWrapper>
          <LoginForm />
        </FieldsWrapper>
      </InnerWrapper>
    </StyledCard>
  </Wrapper>
);

export default Auth;
