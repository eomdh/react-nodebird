import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Card } from 'antd';
import styled from 'styled-components';

import { LOG_OUT_REQUEST } from '../reducers/user';

const ButtonWrapper = styled(Button)`
  margin-top: 20px;
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);
  
  return (
    <Card
      actions={[
        <div key="twit">짹짹<br />{me.Posts.length}</div>,
        <div key="followings">팔로잉<br />{me.Followings.length}</div>,
        <div key="followers">팔로워<br />{me.Followers.length}</div>
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