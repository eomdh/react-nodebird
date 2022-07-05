import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { UNFOLLOW_REQUEST, FOLLOW_REQUEST } from '../reducers/user';

const FollowButton = ({ post }) => {
  const dispatch = useDispatch();
  const { me, followLoading, unfollowLoading  } = useSelector((state) => state.user);
  const isFollowing =  me?.Followings.find((v) => v.id === post.User.id);  // 팔로잉 여부

  const onClickButton = useCallback(() => {
    if (isFollowing) {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: post.User.id,
      })
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.User.id,
      })
    }
  }, [isFollowing]);

  if (post.User.id === me.id) {   // 게시글 작성자 아이디와 로그인 유저의 아이디가 같으면 안보이게
    return null;
  }

  return (
    <Button loading={followLoading || unfollowLoading} onClick={onClickButton}>
      {isFollowing ? '언팔로우' : '팔로우'}
    </Button>
  )
};

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
}

export default FollowButton;