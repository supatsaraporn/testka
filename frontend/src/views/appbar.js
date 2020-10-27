import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Button color="inherit">Computational Mathematics
                        </Button>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        {/* <Button color="inherit">บทที่ 1</Button>
                        <Button color="inherit">บทที่ 2</Button>
                        <Button color="inherit">บทที่ 3</Button>
                        <Button color="inherit">บทที่ 4</Button>
                        <Button color="inherit">บทที่ 5</Button>
                        <Button color="inherit">บทที่ 6</Button> */}
                    </Typography>

                    thanakorn.ka.61@ubu.ac.th
                </Toolbar>
            </AppBar>
        </div>
    );
}
