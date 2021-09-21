import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
        },
    },
}));

const BlackTextTypography = withStyles({
    root: {
        color: "#000000"
    }
})(Typography);

export default function TitleCard(props) {
    const classes = useStyles();
    const image = props.image === null ? 'rgba(255,255,255, 1)' : `url(${props.image})`;
    const mainFeaturedPostStyle = makeStyles((theme) => ({
        mainFeaturedPost: {
            position: 'relative',
                // backgroundColor: 'rgba(255,255,255, 1)',
                color: theme.palette.common.white,
                marginBottom: theme.spacing(4),
                backgroundImage: image,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '100%',
                marginTop: '15px'
        },
    }));

    const mainFeaturedPostClass = mainFeaturedPostStyle();
    return (
        <Paper className={mainFeaturedPostClass.mainFeaturedPost} >
            <div className={classes.overlay} />
            <Grid container styles={{backgroundColor: 'rgba(255,255,255,1)'}}>
                    <div className={classes.mainFeaturedPostContent}>
                        <BlackTextTypography  component="h1" variant="h3" gutterBottom>
                            {props.title}
                        </BlackTextTypography>
                        <BlackTextTypography  variant="h5" paragraph>
                            {props.subtitle}
                        </BlackTextTypography>
                        <BlackTextTypography  variant="subtitle1">
                            {props.body}
                        </BlackTextTypography>
                    </div>
            </Grid>
        </Paper>
    );
}
