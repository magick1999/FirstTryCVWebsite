import React from 'react';
import Grid from '@material-ui/core/Grid';
import FolderList from "../FolderList/FolderList";
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
    card: {
        display: 'flex',
        padding: '15px'

    },
    cardActionArea: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    link: {
        height: 40,
        fontWeight: 400,
    },
});

export default function ContactCard(props) {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <div className={classes.card}>
                <FolderList
                    listData={props.listData}
                />
            </div>
        </Grid>
    );
}
