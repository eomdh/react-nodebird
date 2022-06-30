import React, { useCallback } from 'react';
import useInput from '../hooks/useInput';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const { addCommentDone } = useSelector((state) => state.post);
  const [commentText, onChangeCommentText, setCommentText] = useInput('');

  // 글쓰기가 완료되면 text 초기화
  useEffect(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone])

  const onSubmitComment = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, postId: post.id, userId: id },
    })
  }, [commentText, id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} raws={4}/>
        <Button type="primary" htmlType="submit" style={{ position: 'absolute', right: 0, bottom: -40, zIndex: 1 }}>삐약</Button>
      </Form.Item>
    </Form>
  )
};

export default CommentForm;