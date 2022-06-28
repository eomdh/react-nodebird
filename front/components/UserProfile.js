import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Card } from 'antd';
import styled from 'styled-components';

import { logoutRequestAction } from '../reducers/user';

const ButtonWrapper = styled(Button)`
  margin-top: 20px;
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
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
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <ButtonWrapper onClick={onLogout} loading={logOutLoading}>로그아웃</ButtonWrapper>
    </Card>
  )
}

export default UserProfile;