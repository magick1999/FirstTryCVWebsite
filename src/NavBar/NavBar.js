import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../resources/Logo.png';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#000000",
        },
        secondary: {
            main: "#000000",
        },
    }
});

const useStyles = makeStyles(() => ({
    nav:{
      marginBottom: '10px',
    },
    toolbar: {
        borderBottom: `1px solid `,
        margin: 'auto',
    },
    logo: {
        margin: 'auto',
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'auto',
    },
    toolbarLink: {
        flexShrink: 0,
    },
}));

export default function NavBar(props) {
    const classes = useStyles();
    const { sections , changeScreen} = props;

    const [currentTab, setCurrentTab] = useState(0);

    const onTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
        <div className={classes.nav}>
            <Toolbar className={classes.toolbar}>
                    <img alt='Logo' src={Logo} className={classes.logo}/>
            </Toolbar>
            <Tabs
                value={currentTab}
                centered
                indicatorColor="primary"
                className={classes.toolbarSecondary}
                onChange={onTabChange}
            >
                {sections.map((section) => (
                    <Tab
                        key={section.title}
                        className={classes.toolbarLink}
                        label={section.title}
                        onClick={() => changeScreen(section.title)}
                    />
                ))}
            </Tabs>
        </div>
        </ThemeProvider>
    );
}
