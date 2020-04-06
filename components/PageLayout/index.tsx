import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import DynamicMetaTags from 'components/MetaTags/Dynamic';

// Others
// import useStyles from './styles';

export const PageLayout = ({ pageMeta, children }: PageLayoutProps) => {
  // const classes = useStyles();

  return (
    <>
      <DynamicMetaTags pageMeta={pageMeta} />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export interface PageLayoutProps {
  pageMeta: PageMeta;
  children: any;
}

export default PageLayout;
