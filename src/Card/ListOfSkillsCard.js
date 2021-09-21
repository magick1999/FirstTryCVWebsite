import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import {grey, red} from '@material-ui/core/colors';
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '75%',
        margin: '30px auto 30px auto'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    skills: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: '5px',
        margin: 0,
    },
    skillButton: {
        color: 'white',
        fontWeight: '600',
        margin: '5%',
        fontSize: '150%',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        margin: '5vh',
        padding: theme.spacing(2, 4, 3),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default function ListOfSkills(props) {
    const classes = useStyles();
    let statesModalInitializer = [];
    props.skillData.skills.forEach((skill) => {
        const key = skill.name;
        statesModalInitializer[key] = false;
    });

    const [open, setOpen] = useState(
        {
            ...statesModalInitializer
        }
    );

    const handleOpen = (key) => {
        statesModalInitializer[key] = true;
        setOpen({...statesModalInitializer});
    };

    const handleClose = (key) => {
        statesModalInitializer[key] = false;
        setOpen({...statesModalInitializer});
    };

    return (
        <div className={classes.root}>
            <Typography color='primary' variant='h3' component='h'>{props.skillData.title}</Typography>
            <CardContent className={classes.skills}>
                {props.skillData.skills.map((skill) => {
                    return (<div key={skill.name} style={{display: 'flex', justifyContent: 'center'}}>
                            <Button
                                color={grey[0]}
                                className={classes.skillButton}
                                onClick={() => handleOpen(skill.name)}>
                                {skill.name}
                            </Button>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className={classes.modal}
                                open={open[skill.name]}
                                onClick={() => handleClose(skill.name)}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500,
                                }}
                            >
                                <Fade in={open[skill.name]}>
                                    <div className={classes.paper}>
                                        <Typography paragraph>{skill.name}</Typography>
                                        <Typography paragraph>
                                            {skill.description}
                                        </Typography></div>
                                </Fade>
                            </Modal>
                        </div>
                    );
                })}
            </CardContent>
        </div>
    );
}
