import { Avatar, Button, Input, Tooltip } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  CategoriesIcon,
  IconsSections,
  InnerWrapper,
  SearchIcon,
  SearchSection,
  UserSection,
  Wrapper,
} from './styles';

const { Search } = Input;

const Navbar = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <IconsSections>
          <Link to="/">
            <Tooltip placement="bottom" title="Home">
              <Button type="primary" size="large" shape="circle" icon="home" />
            </Tooltip>
          </Link>
          <Tooltip placement="bottom" title="Search">
            <SearchIcon>
              <Button type="primary" size="large" shape="circle" icon="search" />
            </SearchIcon>
          </Tooltip>
          <Tooltip placement="bottom" title="catefories">
            <CategoriesIcon>
              <Button type="primary" size="large" shape="circle" icon="profile" />
            </CategoriesIcon>
          </Tooltip>
          <Tooltip placement="bottom" title="notifications">
            <Button type="primary" size="large" shape="circle" icon="bell" />
          </Tooltip>
          <Tooltip placement="bottom" title="messages">
            <Button type="primary" size="large" shape="circle" icon="message" />
          </Tooltip>
        </IconsSections>
        <SearchSection>
          <Search
            placeholder="Search for stories or people"
            onSearch={value => console.log(value)}
            size="large"
            allowClear
          />
        </SearchSection>
        <UserSection>
          <Avatar
            shape="square"
            size="large"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </UserSection>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Navbar;
