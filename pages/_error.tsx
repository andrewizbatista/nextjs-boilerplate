import React from 'react';
import styled from 'styled-components';

const ErrorPage = ({  }: IErrorPage) => {
  return (
    <Wrapper>
      <h1>404: Page not found</h1>
    </Wrapper>
  );
};

export interface IErrorPage {}

export default ErrorPage;

const Wrapper = styled.div`
  text-align: center;
  height: 100vh;
`;
