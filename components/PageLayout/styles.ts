import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({}: Theme) => createStyles({}));

const useStyles = () => styles(useTheme());

export default useStyles;
