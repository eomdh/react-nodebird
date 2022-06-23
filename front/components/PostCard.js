import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Popover, Button, Avatar } from 'antd';
import { RetweetOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';

import PostImages from "./PostImages";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpend, setCommentFormOpend] = useState(false);  
  const id = useSelector((state) => state.user.me?.id);

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);    // prev에는 liked의 이전 데이터가 들어가있음
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpend((prev) => !prev);
  }, []);

  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages iamges={post.images} />}
        actions={[
          <RetweetOutlined key="retrweet" />,
          liked
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
            : <HeartOutlined key="heart" onClick={onToggleLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover key="more" content={(
            <Button.Group>
              {id && post.User.id === id ? 
              (
                <>
                  <Button>수정</Button>
                  <Button type="danger">삭제</Button>
                </>
              ) : <Button>신고</Button>}
            </Button.Group>
          )}>
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.nickname}
          description={post.content}
        />
      </Card>
      {commentFormOpend && (
        <div>
          댓글 부분
        </div>)}
      {/* <CommentForm />
      <Comments /> */}
    </div>
  )
}

export default PostCard;