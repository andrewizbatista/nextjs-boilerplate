import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { styled } from '@material-ui/styles';

// Components
import Typography from '@material-ui/core/Typography';

const REDIRECT_TIMEOUT = 5000; // 5s

const ErrorPage = ({}: ErrorPageProps) => {
  const router = useRouter();

  const [redirect] = useState<string>('/');
  const [remainingTime, setRemainingTime] = useState<number>(
    REDIRECT_TIMEOUT / 1000,
  );

  useEffect(() => {
    setTimeout(() => {
      router.push(redirect);
    }, REDIRECT_TIMEOUT);

    const decreaseTime = setInterval(
      () => setRemainingTime((v) => (v > 0 ? v - 1 : v)),
      1000, // 1s
    );

    return () => clearInterval(decreaseTime);
  }, []);

  return (
    <Wrapper>
      <Typography variant="h1" color="primary">
        404 Not Found
      </Typography>
      {redirect && (
        <Typography variant="body1" color="secondary">
          Redirecting you to <code>{`"${redirect}"`}</code> in {remainingTime}s
        </Typography>
      )}
    </Wrapper>
  );
};

export interface ErrorPageProps {}

export default ErrorPage;

const Wrapper = styled('div')({
  textAlign: 'center',
  height: '100vh',
});
