/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.colorPurpleDark};
  height: 5rem;
  justify-content: space-around;
  margin-bottom: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

export const SearchSection = styled.div`
  width: 60%;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const SearchIcon = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
`;

export const CategoriesIcon = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
`;

export const IconsSections = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-around;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const UserSection = styled.div`
  width: 10%;
`;
