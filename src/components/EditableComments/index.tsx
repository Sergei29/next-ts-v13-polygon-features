'use client';
import React, { useState } from 'react';

type Props = {
  comments: string[];
};

const EditableComments = ({ comments: originalComments }: Props) => {
  const [comments, setComments] = useState(() => originalComments);
  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = () => {
    if (!newComment) return;
    setComments((current) => [...current, newComment]);
    setNewComment('');
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') return;
    handleAddComment();
  };

  return (
    <>
      <ul>
        {comments.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddComment}>add</button>
      </div>
    </>
  );
};

export default EditableComments;
