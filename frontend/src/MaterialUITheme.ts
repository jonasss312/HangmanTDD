import { purple, yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const themeOptions = createTheme({
    typography: {
        h1: {
            fontSize: '7rem',
            fontWeight: 4000,
            letterSpacing: '0.07em',
            background: "-webkit-linear-gradient(90deg, #FE6B8B 50%, #FF8E53 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        },
        h2: {
            fontFamily: 'Roboto Condensed',
            fontSize: '3rem',
            fontWeight: 2000,
            color: 'white',
            paddingLeft: '14px'
        },
        body1: {
            fontFamily: 'Roboto Condensed',
            fontSize: '1.2rem',
        }
    },
    palette: {
        background: {
            default: '#1c1818',
            paper: '#040303',
        },
        text: {
            primary: '#ffffff',
            secondary: '#a09e9e',
            disabled: '#7f7f7f'
        },
        primary: {
            main: '#3fb54c',
        },
        secondary: purple
    },
    components: {
        MuiButton: {
            variants: [{
                props: { size: 'large' },
                style: {
                    width: '100%',
                    backgroundColor: "#ed00d7",
                    ':hover': {
                        backgroundColor: "#9cffe3",
                        color: "#ed00d7",
                    }
                }
            },
            {
                props: { color: 'primary' },
                style: {
                    backgroundColor: "#5a1ad4"
                }
            }]
        },
        MuiPaper: {
            defaultProps: {
                style: {
                    background: 'linear-gradient(0deg, #580381 20%, #757181 100%)',
                    border: 0,
                    borderRadius: 3,
                    boxShadow: '0 0px 10px 10px #fc00d1',
                    padding: '20px 20px',
                }
            }
        },
        MuiGrid: {
            defaultProps: {
                style: {
                    padding: '20px',
                }
            }
        },
        MuiStack: {
            defaultProps: {
                style: {
                    alignContent: 'center',
                }
            }
        },
        MuiContainer: {
            variants: [
                {
                    props: { color: 'home' },
                    style: {
                        height: window.innerHeight.toString() + 'px',
                        display: 'flex',
                    }
                },
            ]
        },
    },
});