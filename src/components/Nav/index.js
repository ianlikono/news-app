import { Avatar, Button, Input } from 'antd';
import React from 'react';
import { IconsSections, InnerWrapper, SearchIcon, SearchSection, UserSection, Wrapper } from './styles';

const {Search} = Input;


const Navbar = () => {
    return (
      <Wrapper>
        <InnerWrapper>
          <IconsSections>
            <Button size="large" shape="circle" icon="home" />
            <SearchIcon>
              <Button size="large" shape="circle" icon="search" />
            </SearchIcon>
            <Button size="large" shape="circle" icon="bell" />
            <Button size="large" shape="circle" icon="message" />
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
            <Avatar shape="square" size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </UserSection>
        </InnerWrapper>
      </Wrapper>
    )
}

export default Navbar;