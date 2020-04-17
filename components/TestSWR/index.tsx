import React, { useState, useEffect } from 'react';
import useSWR from 'swr';

// Components
import Typography from '@material-ui/core/Typography';

// Other
import { fetcher, poster } from 'src/api';

export const TestSWR = ({}: TestSWRProps) => {
  const [params, setParams] = useState({ id: 1 });
  const users = useSWR<Users>(['/users', params], fetcher);

  useEffect(() => {
    setTimeout(() => {
      poster<User>('/users', { id: 1, name: 'dodo' }).then((user) => {
        console.log({ user: user.id });
        setParams({ id: 2 });
      });
    }, 3000);
  }, []);

  return (
    <>
      <Typography variant="h6">TestSWR</Typography>
      {users.error && (
        <Typography variant="body1" color="error">
          Error: {users.error || ''}
        </Typography>
      )}
      {users.isValidating && (
        <Typography variant="body1" color="primary">
          Loading...
        </Typography>
      )}
      {users.data &&
        users.data.map((user) => (
          <Typography key={user.id} variant="body1">
            {user.username}
          </Typography>
        ))}
    </>
  );
};

export interface TestSWRProps {}

export default TestSWR;
