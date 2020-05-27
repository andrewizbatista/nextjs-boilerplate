/**
 * * Media Queries
 * {
 *   fontSize: '2rem',
 *   [mediaQueries.mobile]: {
 *     fontSize: '1rem'
 *   }
 * }
 */
const mediaQueries: MediaQueries = {
  mobile: '@media (max-width: 425px)',
  tablet: '@media (max-width: 1024px)',
  laptop: '@media (max-width: 1440px)',
  desktop: '@media (min-width: 1441px)',
};

export interface MediaQueries {
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
}

export default mediaQueries;
