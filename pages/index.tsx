import React from 'react';
import { GetStaticProps } from 'next';
import { styled } from '@material-ui/styles';

// Components
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import PageLayout from 'components/PageLayout';

const HomePage = ({ pageMeta }: HomePageProps) => {
  return (
    <PageLayout pageMeta={pageMeta}>
      <Wrapper>
        <Typography variant="h4" component="h1">
          HELLO WORLD
        </Typography>
        <Typography variant="subtitle1" component="h2">
          Next.js Boilerplate by{' '}
          <Link
            href="https://github.com/andrewizbatista"
            title="@andrewizbatista on GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            @andrewizbatista
          </Link>
        </Typography>
        <Typography variant="caption">
          Good luck on your new project :)
        </Typography>
      </Wrapper>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pageMeta: PageMeta = {
    pageUrl: '/',
    metaTitle: 'Next.js Boilderplate',
    metaDescription: 'Next.js Boilderplate by @andrewizbatista',
  };

  return {
    props: {
      pageMeta,
    },
  };
};

export interface HomePageProps {
  pageMeta: PageMeta;
}

export default HomePage;

const Wrapper = styled('div')({
  textAlign: 'center',
  '& h1': {
    fontWeight: 'bold',
    paddingTop: '10rem',
  },
  '& h2': {
    paddingTop: '0.25rem',
  },
  '& span': {
    display: 'block',
    paddingTop: '2rem',
  },
});
