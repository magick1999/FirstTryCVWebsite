import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Atom8 from '../resources/atom8.png';
import MyWebsite from '../resources/mywebsite.png'
import ReactPlayer from 'react-player';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../Card/Card.scss';
const useStyles = makeStyles((theme)=>({
    projectsContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    projectCard: {
        margin: '5%',
        width: 300,
        height: 300,
    },
    restrictText:{
        display: 'inline-block'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    projectContainer:{
        display: 'flex',
        flexDirection: 'column',
        margin: '5%'
    }
}));


export default function Projects(props) {
    const classes = useStyles();

    const projectCards = [
        {title: 'Kitchen Catastrophe', type: 'youtube', demo: 'https://youtu.be/9H_P-vZ4D1I', github: 'https://github.com/magick1999/KitchenCatastropheGame',
            description: 'This has been a really cool project where I was part of a team and we had to build a game using Java and JavaFx. ' +
                'I decided to do the front-end as I always thought that the customer does not care about what is in the ' +
                'back, and rather judges the game by how it looks. Working in a team with random people has proven to be' +
                'difficult, but it is a part of why I enjoyed this project. The fact that it simulated real world conditions. ' +
                'Even if the skill of the team was not evenly distributed, we managed to get it through. ' +
                'We needed a team leader. In the first semester I sat back and analysed all the members. ' +
                'Our leader from the first part of the project was valuing too much the skill of the team members. ' +
                'This lead to many arguments and everyone was mostly unhappy. I avoided the conflicts at first. In the ' +
                'second semester I took charge and started better managing the people by giving them tasks according ' +
                'to their skill. We needed to submit a team sheet where each member would get points based on their contribution. ' +
                'I was awarding points for effort not for actual workload. This brought up the team morale up by a lot. ' +
                'Even by doing so, I got into some arguments as some members were doing absolutely nothing, and because so ' +
                'I would take all their points and give them to the hard working members. Regarding my actual work on it, ' +
                'we had many troubles making it work as a whole, with the logic written in parallel. Some features such as smooth ' +
                'movement of the character had to be dropped. I did that by interpolating all the data points between x and y ' +
                'and drawing the image across the whole axis at desired intervals to make it look smooth yet not too fast and unnatural. ' +
                'It may not be the most appealing work I have done, based on the visual result, but is one of my first ' +
                'pieces of front-end development. IT WAS INDEED A CATASTROPHE :)'},
        {title: 'Atom8 GUI', type: 'github', demo: Atom8, github: 'https://github.com/magick1999/Atom8GUI',
            description: 'Atom8 started as a project to take part into an start-up incubator. ' +
                'This is the website of the product and I am quite pleased with how it looks. ' +
                'My process of thought is always how can I make something easy for the user to comprehend and see, yet have it ' +
                'look pleasing. It being one of my early pieces of work, I am certain in the future I will laugh looking at it, ' +
                'but right now I am content with my progress.'},
        {title: 'Personal display website', type: 'github', demo: MyWebsite, github: 'www.google.com',
            description: 'I always thought it would be cool to have an website to display my skills, and here we are. ' +
                'This was a fun project as there was no pressure on me to rush it. I just wanted to display my skills ' +
                'somehow, yet make it short and concise and also look good. I can say that I completely blew my initial time ' +
                'target, but that was because I redesigned the website 3 times haha. It was not such a learning curve ' +
                'regarding my react skills, as it was for my design and UI/UX development skills.'}];


    return (
        <div className={classes.projectsContainer}>
            {projectCards.map((project) => {
                return (
                    <div key={project.title} className={classes.projectContainer} >
                        <div style={{display: 'flex'}}>
                            <Typography variant="h6" component="h1" style={{margin: '5%'}}>{project.title}</Typography>
                            <Button
                                color="default"
                                // className={classes.signInButton}
                                startIcon={<GitHubIcon/>}
                                href={project.github}
                            />
                        </div>
                        <Typography variant="h6" component="h1" style={{margin: '0 7% 5% 7%'}}>{project.description}</Typography>
                        {project.type === 'github' &&
                            <img alt={project.title} src={project.demo} style={{width:'100%', height: '100%'}} width={640} height={360}/>
                        }
                        {project.type === 'youtube' &&
                            <ReactPlayer
                                style={{margin: 'auto'}}
                                playing={true}
                                url={project.demo}
                            />
                        }
                    </div>
                    )
            })}
        </div>
    );
}

