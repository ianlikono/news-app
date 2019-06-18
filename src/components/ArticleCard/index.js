import { Card, Icon } from 'antd';
import truncate from 'lodash/truncate';
import { darken } from 'polished';
import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import {
  ArticleDescription,
  ArticleImage,
  ArticleTitle,
  Header,
  PublishedAt,
  Source,
  Wrapper,
} from './styles';

const StyledCard = styled(Card)`
  width: 100%;
  height: auto;
  &:hover {
    background: ${props => {
      const hoverColor = darken(0.3, props.theme.colorDarkLight);
      return `${hoverColor} !important`;
    }};
  }
`;

const ArticleCard = props => {
  const { source, publishedAt, title, description, urlToImage } = props;
  return (
    <StyledCard hoverable>
      <Wrapper>
        <Header>
          <Source>{source}</Source>
          <PublishedAt>
            <Icon type="clock-circle" /> <Moment fromNow>{publishedAt}</Moment>
          </PublishedAt>
        </Header>
        <ArticleImage src={urlToImage} />
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleDescription>
          {truncate(description, {
            length: 265,
            omission: '[...]',
          })}
        </ArticleDescription>
      </Wrapper>
    </StyledCard>
  );
};

ArticleCard.propTypes = {
  source: PropTypes.string,
  publishedAt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  urlToImage: PropTypes.string,
};

ArticleCard.defaultProps = {
  urlToImage: null,
  description: null,
  title: null,
  publishedAt: null,
  source: null,
};

export default ArticleCard;
