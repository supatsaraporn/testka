import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize: 18,
    },
    paper2: {
        padding: theme.spacing(2),
        textAlign: 'end',
        color: theme.palette.text.secondary,
    },
}));