import { NextApiHandler } from 'next';

import { POSTS } from '@/constants';

interface IReturnType {
  [x: string]: any;
}

const handlePosts: NextApiHandler<IReturnType> = async (req, res) => {
  setTimeout(() => {
    res.status(200).json(POSTS);
  }, 700);
};

export default handlePosts;
