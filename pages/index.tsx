import React from 'react';

const HomePage = ({}: HomePageProps) => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

HomePage.getInitialProps = async (): Promise<HomePageProps> => {
  return {};
};

export interface HomePageProps {}

export default HomePage;
