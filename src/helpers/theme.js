import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";

export const theme =  createMuiTheme({
    palette: {
        primary: {
            light: "#002049",
            main: "#e32679",
            dark: "#343434"
        }
    },
    typography: {
        useNextVariants: true,
    },
});
