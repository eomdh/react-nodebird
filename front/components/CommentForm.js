import React, { useCallback } from 'react';
import useInput from '../hooks/useInput';
import { Button, Form, Input } from 'antd';
import { useSelector } from 'react-redux';

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText] = useInput('');
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);

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