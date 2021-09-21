import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from '@material-ui/core/Typography';
import useCheckMobileScreen from '../Hooks/useCheckMobileScreen'
import MyFace from '../resources/RAZ_8833.JPG'
import grey from "@material-ui/core/colors/grey";
import Motto from "../Card/Motto";
import Typewriter from 'typewriter-effect';

const useStyles = makeStyles(() => ({
        innerFlexBox: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            margin: '100px 20px 50px 20px',
            width: '100%',
        },

        textLine: {
            borderBottom: '1px solid #000',
            lineHeight: '0.1em',
            margin: '10px 0 20px',
        },
        titleText: {
            textAlign: 'center',
            fontSize: '3vw',
            fontWeight: '600',
            background: '#fff',
            padding: '0 10px',
        },

        bodyBlackLogo: {
            backgroundColor: 'black',
            display: 'flex',
            height: '40vh',
            justifyContent: 'space-around'
        },
        myFace: {
            height: '100vh',
            backgroundImage: `url(${MyFace})`,
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
        },
        bodyBlack: {
            backgroundColor: grey[900],
            display: 'flex',
            height: '100%',
            justifyContent: 'space-around',
        },

        bodyWhite: {
            backgroundColor: 'white',
            display: 'flex',
            padding: '20px',
            justifyContent: 'space-around',
        },

        codeBody: {
            backgroundColor: '#1d1f1e',
            display: 'flex',
            padding: '20px',
            justifyContent: 'space-around',
        },

        gridList: {
            justifyContent: 'space-around',
            width: '100%',
            height: '100%',
        },

        image: {
            height: '100%',
            overflow: 'auto',
            margin: 'auto',
        },

        ideology: {
            textAlign: 'center',
            margin: '10%',
        },

        greeting: {
            textAlign: 'center',
            fontWeight: '600',
            marginTop: '10%',
            fontSize: '5vw',
        },

        quotes: {
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
        },

        softSkillCard: {
            margin: '20px',
        },

        root: {
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            height: '100%',
        },

}));
export default function Home() {
    const classes = useStyles();

    const device = useCheckMobileScreen();


    return (
        <div className={classes.root}>
            <div className={classes.myFace}>
                <Typography color='primary' className={classes.greeting}> Hi, I'm Tian Bogdan-Mihai</Typography>
            </div>
            <div className={classes.codeBody}>
                {/*<Typography variant='h2' className={classes.ideology}>*/}
                {/*Hard skills do not define a good programmer, soft skills do!*/}
                {/*</Typography>*/}
                {/*<Motto/>*/}
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(50)
                            .typeString("<code style='font-size: xx-large; color: white'><code style='color: #b290a9'>if</code><code>(</code><code style='color: #c0e4fa'>softSkills</code><span> == </span><code style='color: #6e93bd'>true </code>&&<code style='color: #c0e4fa'> hardSkills</code> > <code style='color: #bad1b4'>5</code><code>){</code><br/></code>")
                            .typeString("<code style='font-size: xx-large; color: white'>&nbsp;&nbsp;&nbsp;&nbsp;<code style='color: #c0e4fa'>System</code>.<code style='color: #c0e4fa'>out</code>.<code style='color: #bad1b4'>println</code>(<code style='color: #af978d'>'Good programmer!'</code>);</code>")
                            .pauseFor(400)
                            .deleteChars(39)
                            .typeString("<code style='font-size: xx-large; color: white'><code style='color: #c0e4fa'>console</code>.<code style='color: #bad1b4'>log</code>(<code style='color: #af978d'>'Good programmer!'</code>);<br/></code>")
                            .typeString("<code style='font-size: xx-large; color: white'>}<code style='color: #b290a9'>else if</code>(<code>hardSkills </code> <= <code style='color: #bad1b4'>5</code>){<br/></code>")
                            .typeString("<code style='font-size: xx-large; color: white'>&nbsp;&nbsp;&nbsp;&nbsp;<code style='color: #c0e4fa'>console</code>.<code style='color: #bad1b4'>log</code>(<code style='color: #af978d'>'Not necesarily!'</code>);<br/></code>")
                            .typeString("<code style='font-size: xx-large; color: white'>}<code style='color: #b290a9'>else</code>{<br/>")
                            .typeString("<code style='font-size: xx-large; color: white'>&nbsp;&nbsp;&nbsp;&nbsp;<code style='color: #c0e4fa'>console</code>.<code style='color: #bad1b4'>log</code>(<code style='color: #af978d'>'Why bother:)?'</code>);<br/></code>")
                            .typeString("<code style='font-size: xx-large; color: white'>}</code>")
                            // .pauseFor(250)
                            .start();
                    }}
                />
            </div>
        </div>

    );
}
