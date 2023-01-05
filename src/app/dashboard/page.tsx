import React from 'react';

interface IProps {
  [x: string]: any;
}

const DashboardPage = async ({}: IProps) => {
  return (
    <div>
      <h1 className="flex justify-center items-center p-5 text-green-500 text-lg font-bold">
        Public: Dashboard Page
      </h1>
    </div>
  );
};

export default DashboardPage;
