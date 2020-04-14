import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({}: Theme) => createStyles({}));

const useGlobalStyles = () => styles(useTheme());

export default useGlobalStyles;
