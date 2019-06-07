/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const InnerWrapper = styled.div`
    display: flex;
`;

export const PictureWrapper = styled.div`
    width: 50%;
    @media (max-width: 1000px) {
    display: none;
  }
`;
export const FieldsWrapper = styled.div`
    width: 50%;
    padding: 5rem;
    @media (max-width: 1000px) {
        width: 100%;
  }
`;


export const LoginPic = styled.img`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-around;
`;
