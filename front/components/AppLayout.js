import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import useInput from '../hooks/useInput';

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .ant-col:first-child {
      padding-left: 0 !important;
  }

  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);

  const [searchInput, onChangeSearchInput] = useInput('');
  
  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  return (
    <div>
      <Global />
      <Menu mode="horizontal"
            items={[
              { label: <Link href="/"><a>노드버드</a></Link>, key: '/'},
              { label: <Link href="/profile"><a>프로필</a></Link>, key: '/profile'},
              { label: <SearchInput 
                enterButton 
                value={searchInput}
                onChange={onChangeSearchInput}
                onSearch={onSearch} />, key: '/search'}
            ]}
      />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          { children }
        </Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/eomdh" target="_blank" rel="noreferrer noopener">My Github</a>
        </Col>
      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;