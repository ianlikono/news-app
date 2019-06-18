/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.textColorLight};
`;

export const Header = styled.div`
  font-size: 1.4rem;
  margin-bottom: 2px;
  min-height: 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Source = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colorAquaDark};
`;

export const PublishedAt = styled.span`
  color: ${props => props.theme.colorAquaDark};
`;

export const ArticleImage = styled.img`
  max-height: 200px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const ArticleTitle = styled.span`
  margin: 0;
  padding: 0 0 10px;
  font-size: 2.2rem;
  font-weight: bold;
`;

export const ArticleDescription = styled.span`
  font-size: 1.4rem;
  line-height: 1.8em;
`;
