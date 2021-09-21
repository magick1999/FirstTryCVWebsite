import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    emailButton: {
        textTransform: 'none'
    }
}));

export default function FolderList(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button
                color="default"
                // className={classes.signInButton}
                startIcon={<LinkedInIcon/>}
                href={props.listData[3].body}
            />
            <Button
                color="default"
                // className={classes.signInButton}
                startIcon={<GitHubIcon/>}
                href={props.listData[3].body}
            />
            <Button
                color="default"
                className={classes.emailButton}
                startIcon={<EmailIcon/>}
            >
                {props.listData[0].body}
            </Button>
            <Button
                color="default"
                // className={classes.signInButton}
                startIcon={<PhoneIcon/>}
            >
                {props.listData[1].body}
            </Button>
            <Button
                color="default"
                // className={classes.signInButton}
                startIcon={<PhoneIcon/>}
            >
                {props.listData[2].body}
            </Button>
        </div>
    );
}
