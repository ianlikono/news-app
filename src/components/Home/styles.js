/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Loader = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const CardsWrapper = styled.div`
  width: 55%;
  @media (max-width: 1000px) {
    margin: 0 auto;
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const CardBody = styled.div`
  margin-bottom: 1.2rem;
`;

export const Categories = styled.div`
  width: 35%;
  height: auto;
  position: fixed;
  right: 5%;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const CategoryHeading = styled.span`
  font-size: 2rem;
  color: ${props => props.theme.primaryColor};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
