import { createMuiTheme } from '@material-ui/core/styles';

const palette = { primary: { main: '#B0BEC5' } };
const themeName = 'Tower Gray Razzmatazz Emu';
const breakpointValues = { "xs": 0, "lg": 1360, "sm": 612, "xl": 1920, "md": 960 }

const theme = createMuiTheme({ palette, themeName, breakpoints: { values: breakpointValues }});
export default theme;
