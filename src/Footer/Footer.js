import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {grey} from '@material-ui/core/colors';
import Contact from "../Contact/Contact";

const useStyles = makeStyles((theme) => ({
    footer: {
        background: 'lightgrey',
        // marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="body2" color="secondary" align="center">
                    {'Tian Bogdan-Mihai '}{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
                <Contact/>
            </Container>
        </footer>
    );
}
