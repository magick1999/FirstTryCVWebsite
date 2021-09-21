import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Child from '../resources/childhood.JPG'
import Teenager from '../resources/teenageyears.JPG'
import College from '../resources/MyFace.png'
import Present from '../resources/present.jpeg'
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Fade from 'react-reveal/Fade';
import ListOfSkills from "../Card/ListOfSkillsCard";
import grey from '@material-ui/core/colors/grey';
import CustomCard from "../Card/CustomCard";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
    },
    paper: {
        padding: '6px 16px',
    },
    margin: {
        margin: '25px',
    },
    bodyBlack: {
        backgroundColor: grey[900],
        display: 'flex',
        height: '100%',
        justifyContent: 'space-around',
        flexDirection: 'column',
        padding: '30px 0px 30px 0px',
    },
    text: {
        color: 'white',
        margin: 'auto',
    },
    bodyWhite: {
        backgroundColor: '#d3d3d3',
        display: 'flex',
        height: '100%',
        justifyContent: 'space-around',
        flexDirection: 'column'

    },
    h6: {
        wordBreak: 'break-all',
        margin: '15px',
    },
}));


export default function AboutMe() {
    const classes = useStyles();

    const pageContent = [
        {
            title: 'Childhood and how I got into programming',
            body: 'As many others my age, I\'ve grown up playing video games. The wonder and excitement of each new level, the rush of emotion after a win and the sheer determination to just be better have built the person, the programmer, that I am today. It gave me the tools and the means to create my own adventures.',
            image: Child
        },
        {
            title: 'Developing my passion during teenage years',
            body: 'After countless of tutorials and many failed projects, I got my first taste of real programming while studying at one of the most prestigious competitive clubs in the country. There, I got offered the chance to take part in numerous competitions and Olympiads exceeding all expectations, and obtaining well-above average results. This experience laid the foundations for my competitive spirit and my strive for excellence.',
            image: Teenager
        },
        {
            title: 'Finding a path while in college',
            body: 'In the vast ocean of programming, college helped me choose a road to follow, both in life and in work. I have found my affinity and love for the avenue of applications created around a design philosophy that puts the user in the front seat.',
            image: College
        },
        {
            title: 'Building a career in present',
            body: 'This website represents the cornerstone for my developer career. It will accompany me in my journey across my first encounter with this ever evolving industry and into my last year of college. It will be a witness to my growth, both as a programmer and a human.',
            image: Present
        },
    ];

    const skills = [{
        title: 'Programming',
        skills: [
            {
                name: 'Java', description: 'I have discovered Java in college. ' +
                    'I can not say I love it but I also can not say I do not love it. ' +
                    'I studied advanced data structures in java but, ' +
                    'I think that programming comes down to concepts, ' +
                    'therefore as long as you master those, the language does not matter. ' +
                    'The time I spent using this language is around three years, and in the meantime, most of the ' +
                    'programming basics were experienced by me in this staple of the programming industry.'
            },
            {
                name: 'Ruby', description: 'This language was trendy at some point some time ago among my friends, ' +
                    'but my first contact with it was when I got hired. Ruby was the language of choice at my first job.' +
                    'I can say it is quite easy to use and the familiarisation period was quite short. I have not had ' +
                    'problems with this programming dialect as having a good grip on the basics helped me ' +
                    'learn any new concept real quick.'
            },
            {
                name: 'HTML',
                description: 'HTML is not something I directly studied because usually I learn new things ' +
                    'when I try to do a new project, therefore HTML was something I needed to get the basics of ' +
                    'while doing web development.'
            },
            {
                name: 'ReactJS',
                description: 'Oh boy, I do not know where to begin with this! It is not necessarily the ' +
                    'framework that I love, because at the end of the day it is just another tool to get my job done ' +
                    'but oh my, I do love doing web development. I actually think it is not only a love for web development ' +
                    'as it is the love for building beautiful applications, modern looking, simple feeling, and enjoyable ' +
                    'to use. The visual feedback I get back from my work, gets my blood flowing. But now to actually sum ' +
                    'up my ReactJS experience I can say I worked around 6 months of on and off work, and that is just because ' +
                    'during my first job I had a project for about two months in ReactJS with Ruby On Rails back-end. ' +
                    'Also in my free time I developed this website and the one for the Atom8 project.'
            },
            {
                name: 'Javascript', description: 'As I just mentioned my love for designing beautiful applications, ' +
                    'Javascript is a tool I used, therefore I am quite comfortable with it. I used a little bit of ' +
                    'Typescript some time ago but I can not say I have too much experience with it, but I am ' +
                    'always open to new things to learn.'
            },
            {
                name: 'C++', description: 'This has helped me build the foundation of programming in my upbringing. ' +
                    'I learned C++ in a competitive programming club back in Romania -Cygnus-. I used to program in it ' +
                    'a lot of years ago, therefore I am more than a little bit rusty with it. I am aware of the concept ' +
                    'of pointers and how they work, but I never needed them, so I lack the hands on experience. ' +
                    "A more experienced programmer I heard say: 'There are two types of programmers, the one that " +
                    "understand pointers, and the ones that don't.'. So to conclude this, I wish to take the Advanced" +
                    "OOP module in my third year which covers pointers, advanced data structures and more, in C/C++."
            },
            {
                name: 'CSS',
                description: 'This is the staple of building beautiful web applications, therefore I was ' +
                    'constrained to learn how to manipulate the cascading style-sheets to make my work look beautiful. ' +
                    'I am certain that in several months I will feel bad about my old work, but this is how it should be. ' +
                    'I EMBRACE THE EVOLUTION.'
            },
            {
                name: 'SQL',
                description: 'SQL was the go-to language for databases in my course in university, but I am ' +
                    'aware that the newer style NO-SQL databases are starting to be more popular such as MONGO DB. ' +
                    'This is not something that concerns me as I rely on my ability to adapt quickly.'
            },
            {
                name: 'Databases',
                description: 'Because building beautiful applications is my thing, I also needed to know ' +
                    'how databases work, hence my little but which is actually the bare minimum to get an application ' +
                    'running, has helped me build some full-stack applications.'
            },
            {
                name: 'AWS Cloud Practitioner',
                description: 'Cloud was not a new concept going into my first job, but I ' +
                    'lacked the practical experience, which I gained after the ReactJS and RoR project. After that ' +
                    'and a small talk with a system administrator from within the organisation, I decided the AWS ' +
                    'certifications were worth pursing, consequently, here I am with the CCP certification, and ' +
                    'preparing for the AWS Developer exam.'
            },
            {
                name: 'JSON', description: 'I do not think there is too much to be said about this. It is one of the ' +
                    'basics of programming and knowledge of this is mandatory whatever you do.'
            },
            {
                name: 'XML',
                description: 'The university has covered a lot of skills and this is one of them. I am not ' +
                    'sure how useful it is, but I do have some basic knowledge of it.'
            }
        ]
    },
        {
            title: 'Critical',
            skills: [
                {
                    name: 'Advanced Data Structures and Algorithms',
                    description: 'This is a pillar in the foundation of programming. ' +
                        'Even before I actually learned them in college, the thought of having a structure with a key ' +
                        'value pair was crossing my mind, when doing competitive programming. The university helped ' +
                        'me the variety of advanced data structures. Algorithms are something I used and I am familiar ' +
                        'with the main ones, but I am practicing them in more detail for interviews. Why I say for interviews ' +
                        'is because I do not like doing bare algorithmic training. I always liked the more practical side ' +
                        'of programming.'
                },
                {
                    name: 'Strong Problem Solving Abilities', description: 'This is one of my strong points. ' +
                        'Most of the passionate programmers work really good when they get in the ' +
                        "'zone'. I get in the 'zone' by having to solve hard tasks. The challenge incites me. This is what " +
                        "makes me better at this. Doing monotone and repetitive jobs, kill my excitement, and this is " +
                        "an enemy of productivity. People who work with passion, work better. Coming back to the actual " +
                        "project, because I went a little bit off the board. This skill is the fundamental skill at the " +
                        "base of the pyramid which is my life. I always think of the life as problems and solutions. " +
                        "And contrary of how normal people think, I look for the cause of the problem, because solving it " +
                        "solves the consequences as well."
                },
                {
                    name: 'Object Oriented Programming',
                    description: 'Before going to Swansea University, my experience with this ' +
                        'was inexistent. The competitive programming club did not cover anything else other than ' +
                        'algorithms. But the university did cover very well this basic skill. Maybe this university is ' +
                        'not the most technical one, nor the best one. But what it got right, was teaching us the basics ' +
                        'and training the practical skills, skills which we will use in the industry, such as about Agile ' +
                        'methodology, group projects, basic skills such as OOP, Algorithms, building REST APIs and so on.'
                },
                {
                    name: 'Model-View-Controller Pattern',
                    description: 'The MVC is usually the entry point for beginners ' +
                        'to how real-life programs are built and structured. Working with Kotlin to build Android applications ' +
                        'have cemented this concept in my mind. To top this off, building full-stack applications was  ' +
                        ''
                }
            ]
        },
        {
            title: 'Soft',
            skills: [
                {name: 'Excellent Communication', description: ''},
                {name: 'Time Management', description: ''},
                {name: 'Fast Learner', description: ''},
                {name: 'Work Ethic', description: ''},
                {name: 'Conflict Resolution', description: ''}]
        }];

    return (
        <div className={classes.root}>
            <div className={classes.bodyWhite}>
                <div>
                    {pageContent.map((lifeChapter) => {
                        return (
                            <div key={lifeChapter.title}>
                                <CustomCard
                                    image={lifeChapter.image}
                                    title={lifeChapter.title}
                                    body={lifeChapter.body}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={classes.bodyBlack}>
                <Fade>
                    {skills.map((skill) => {
                        return (
                            <div key={skill.title}>
                                <ListOfSkills skillData={skill}/>
                            </div>
                        )
                    })}
                </Fade>
            </div>
        </div>
    );
};
