import React from 'react';

const fetchComments = () =>
  new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve(['Comment 1', 'Comment 2', 'Comment 3']);
    }, 2000);
  });

const Comments = async () => {
  const comments = await fetchComments();

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
