import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ContactCard from '../Card/ContactCard'


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        margin: '50px'
    },
    card: {
        marginBottom: '50px',
        marginTop: '50px',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 500,
        float: 'left',
    },
    cardSection: {
        display: "flex",
        flexDirection: "row",
    },
    cardContent: {
        marginBottom: '25px',
        marginTop: '25px',
        marginLeft: '25px',
        marginRight: '25px',
    }
}));

export default function Contact() {
    const classes = useStyles();
    const listData = [{title: 'Email', body: 'tianbogdan@gmail.com'}, {
        title: 'UK',
        body: '+447493661543'
    }, {title: 'RO', body: '+40739615565'}, {
        title: 'Tian Bogdan-Mihai',
        body: 'https://www.linkedin.com/in/bogdan-mihai-tian/'
    }, {title: 'My GitHub', body: 'https://github.com/magick1999'}];

    return (
        <div className={classes.root}>
            <ContactCard
                listData={listData}
            />
        </div>
    );
}
