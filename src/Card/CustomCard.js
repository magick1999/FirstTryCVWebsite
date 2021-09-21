import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        marginBottom: '5%',
        marginTop: '25px',
        marginLeft: '25px',
        marginRight: 'auto',
        float: 'left',
        fontWeight: 600,
        fontSize: 30

    },
    cardSection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cardContent: {
        marginBottom: '25px',
        marginTop: '25px',
        marginLeft: '25px',
        marginRight: '25px',
    },

    body: {
        fontWeight: 400,
        fontSize: 20,
    }
}));
export default function CustomCard(props) {

    const classes = useStyles();

    return (
        <article className="post">
                <Fade>
                    <div className="absolute-bg"
                         style={{backgroundImage: `url(${props.image})`}}
                    />
                </Fade>
            <div className="post__container">
                <Fade>
                    <Typography className="post__time" variant='subtitle1'>Jan 22 2017</Typography>
                    <Typography className="post__header" variant='h3'>{props.title}</Typography>
                </Fade>
                <Fade>
                    <Typography className="post__text" variant='h6'>{props.body}</Typography>
                </Fade>
            </div>
        </article>
    );
};
