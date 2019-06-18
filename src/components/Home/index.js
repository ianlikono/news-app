/* eslint-disable no-case-declarations */
/* eslint-disable no-shadow */
import { Card, Spin } from 'antd';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MeContext } from '../../context/user';
import ArticleCard from '../ArticleCard';
import {
  CardBody,
  CardsWrapper,
  Categories,
  CategoriesWrapper,
  CategoryHeading,
  Loader,
  Wrapper,
} from './styles';

const StyledSpin = styled(Spin)`
  font-size: 55px !important;
`;

const Home = () => {
  const { firebaseToken } = useContext(MeContext);
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    async function getArticles() {
      try {
        const response = await axios.get(
          'https://us-central1-calender-1a0d2.cloudfunctions.net/routes/techarticles',
          {
            headers: {
              // eslint-disable-next-line prefer-template
              Authorization: 'Bearer ' + firebaseToken,
            },
          },
        );
        setArticles(response.data.articles.articles);
      } catch (error) {
        console.log(error);
      }
    }
    getArticles();
  }, [firebaseToken]);

  async function getArticles(param) {
    try {
      const response = await axios.get(
        `https://us-central1-calender-1a0d2.cloudfunctions.net/routes/${param}`,
        {
          headers: {
            // eslint-disable-next-line prefer-template
            Authorization: 'Bearer ' + firebaseToken,
          },
        },
      );
      setArticles(response.data.articles.articles);
    } catch (error) {
      console.log(error);
    }
  }

  function onCategoryClicked(category) {
    setArticles(null);
    switch (category) {
      case 'trending':
        getArticles('trendingarticles');
        break;
      case 'business':
        getArticles('businessarticles');
        break;
      case 'technology':
        getArticles('techarticles');
        break;
      case 'bitcoin':
        getArticles('bitcoinarticles');
        break;
      case 'hollywood':
        getArticles('hollywoodarticles');
        break;
      case 'entertainment':
        getArticles('entertainmentarticles');
        break;
      case 'politics':
        getArticles('politicsarticles');
        break;
      case 'sports':
        getArticles('sportsarticles');
        break;
      default:
        getArticles('trendingarticles');
    }
  }

  function renderArticles(articles) {
    return articles.map(Article => (
      <div key={Article.urlToImage}>
        <CardBody>
          <ArticleCard
            source={Article.source.name}
            title={Article.title}
            publishedAt={Article.publishedAt}
            description={Article.content}
            urlToImage={Article.urlToImage}
          />
        </CardBody>
      </div>
    ));
  }
  if (!articles) {
    return (
      <Wrapper>
        <Loader>
          <StyledSpin size="large" tip="Loading..." />
        </Loader>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <CardsWrapper>{renderArticles(articles)}</CardsWrapper>
      <Categories>
        <Card>
          <h3>Categories</h3>
          <CategoriesWrapper>
            <CategoryHeading onClick={() => onCategoryClicked('trending')}>
              #trending
            </CategoryHeading>
            <CategoryHeading onClick={() => onCategoryClicked('business')}>
              #business
            </CategoryHeading>
            <CategoryHeading onClick={() => onCategoryClicked('technology')}>
              #technology
            </CategoryHeading>
            <CategoryHeading onClick={() => onCategoryClicked('entertainment')}>
              #Entertainment
            </CategoryHeading>
            <CategoryHeading onClick={() => onCategoryClicked('politics')}>
              #politics
            </CategoryHeading>
            <CategoryHeading onClick={() => onCategoryClicked('sports')}>#sports</CategoryHeading>
          </CategoriesWrapper>
        </Card>
      </Categories>
    </Wrapper>
  );
};
export default Home;
