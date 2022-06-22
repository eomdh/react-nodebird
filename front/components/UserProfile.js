import React, { useCallback } from 'react';
import { Avatar, Button, Card } from 'antd';
import styled from 'styled-components';

const ButtonWrapper = styled(Button)`
  margin-top: 20px;
`;

const UserProfile = ({ setIsLoggedIn }) => {

  const onLogout = useCallback(() => {
    setIsLoggedIn(false);
  })
  
  return (
    <Card
      actions={[
        <div key="twit">짹짹<br />0</div>,
        <div key="followings">팔로잉<br />0</div>,
        <div key="followers">팔로워<br />0</div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>DH</Avatar>}
        title="eomdh"
      />
      <ButtonWrapper onClick={onLogout}>로그아웃</ButtonWrapper>
    </Card>
  )
}

export default UserProfile;