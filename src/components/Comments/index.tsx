import React from 'react';

import EditableComments from '@/components/EditableComments';

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
      <EditableComments comments={comments} />
    </div>
  );
};

export default Comments;
