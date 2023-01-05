'use client';
import React, { useRef } from 'react';
import { signIn } from 'next-auth/react';

import TextBox from '@/components/TextBox';
import Button from '@/components/Button';

interface IProps {
  [x: string]: any;
}

const LoginPage = ({}: IProps): JSX.Element => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!userNameRef.current?.value || !passwordRef.current?.value) {
      return;
    }

    await signIn('credentials', {
      username: userNameRef.current.value,
      password: passwordRef.current.value,
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <div
      className={
        'flex justify-center items-center  h-screen bg-gradient-to-br from-cyan-300 to-sky-600'
      }
    >
      <form
        onSubmit={onSubmit}
        className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2"
      >
        <TextBox ref={userNameRef} lableText="َUser Name" />
        <TextBox ref={passwordRef} lableText="Password" type={'password'} />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
