import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const globalStyles = makeStyles(({}: Theme) => createStyles({}));

const useGlobalStyles = () => globalStyles(useTheme());

export default useGlobalStyles;
