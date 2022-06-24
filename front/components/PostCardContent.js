import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostCardContent = ({ postData }) => {
  return (
    // 해시태그 split 하는 정규식
    <div>
      {postData.split(/(#[^\s#]+)/g).map((v, i) => {
        if (v.match(/(#[^\s]+)/)) {
          return <Link href={`/hashtag/${v.slice(1)}`} key={i}><a>{v}</a></Link>  // slice(1) => # 떼어내기
        }
        return v;
      })}
    </div>
  )
};

PostCardContent.propTypes = { postData : PropTypes.string.isRequired };

export default PostCardContent;