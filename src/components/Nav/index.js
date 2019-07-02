import { Avatar, Button, Input, Tooltip } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MeContext } from '../../context/user';
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
  const { me } = useContext(MeContext);
  const isLoggedIn = () => {
    if (me && !me.isAnonymous) {
      return true;
    }
    return false;
  };
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
          {isLoggedIn() ? (
            <Avatar
              shape="square"
              size="large"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          ) : (
            <Link to="/login">
              <Tooltip placement="bottom" title="Login">
                <Button type="primary">Login</Button>
              </Tooltip>
            </Link>
          )}
        </UserSection>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Navbar;
