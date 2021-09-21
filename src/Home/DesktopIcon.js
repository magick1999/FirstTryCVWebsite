import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    root: {
    },
}));

export default function DesktopIcon(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {props.icon}
            <Typography>{props.iconName}</Typography>
        </div>
    );
}
