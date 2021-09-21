import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: '5%'
    },
    title: {
        float: 'left',
        fontWeight: 600,
        fontSize: 30

    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    cardContent: {
        marginBottom: '25px',
        marginTop: '25px',
        marginLeft: '25px',
        marginRight: '25px',
    },

    subtitle: {
        fontWeight: 600,
        fontSize: 30,
    },

    body: {
        fontWeight: 400,
        fontSize: 20,
    }
}));
export default function Motto() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.textContainer}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <Typography className='css-typing' style={{color: '#c487bf'}} variant='h6'>if</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>(</Typography>
            <Typography style={{color: '#a4e7ff'}} variant='h6'>softSkills&nbsp;</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>&nbsp;==&nbsp;</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>true&nbsp;</Typography>
            <Typography style={{color: '#a4e7ff'}} variant='h6'>hardSkills&nbsp;</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>>&nbsp;</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>5</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>)&#123;</Typography>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <Typography style={{color: '#c487bf'}} variant='h6'>&nbsp;&nbsp;&nbsp;&nbsp;console.</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>log</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>(</Typography>
            <Typography style={{color: '#455e3b'}} variant='h6'>'Good programmer!'</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>);</Typography>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <Typography style={{color: '#c487bf'}} variant='h6'>&#125;</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>elsif</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>(</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>hardSkills&nbsp;</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>>&nbsp;</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>5</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>)&#123;</Typography>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <Typography style={{color: '#c487bf'}} variant='h6'>&nbsp;&nbsp;&nbsp;&nbsp;console.</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>log</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>(</Typography>
            <Typography style={{color: '#455e3b'}} variant='h6'>'Not necesarily!'</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>);</Typography>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <Typography variant='h6'>&#125;</Typography>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <Typography style={{color: '#c487bf'}} variant='h6'>else</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>&#123;</Typography>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <Typography style={{color: '#c487bf'}} variant='h6'>&nbsp;&nbsp;&nbsp;&nbsp;console.</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>log</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>(</Typography>
            <Typography style={{color: '#455e3b'}} variant='h6'>'Why bother:)?'</Typography>
            <Typography style={{color: '#c487bf'}} variant='h6'>);</Typography>
            </div>
            <Typography style={{color: '#c487bf'}} variant='h6'>&#125;</Typography>
            </div>
        </div>
    );
};
