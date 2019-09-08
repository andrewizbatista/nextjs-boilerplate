import React from 'react';

const Homepage = ({  }: IHomepage) => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

Homepage.getInitialProps = async (): Promise<IHomepage> => {
  return {};
};

export interface IHomepage {}

export default Homepage;
