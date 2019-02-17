import getMuiTheme from '@material-ui/core/styles/getThemeProps';
import getThemeProps from "@material-ui/core/es/styles/getThemeProps";

export const theme = getThemeProps({
    theme: {
        props: {
            palette: {
                primary1Color: "#002049",
                primary2Color: "#e32679",
                primary3Color: "#343434"
            },
            avatar: {
                borderColor: null,
            },
        }
    }
});
