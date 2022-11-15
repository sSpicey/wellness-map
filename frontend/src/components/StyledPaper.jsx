import { AppBar, Container, Grid, Toolbar, Paper, Typography, Button, IconButton, MenuIcon, Slider, ListItem } from '@mui/material'
import { useTheme } from '@mui/material/styles';

function StyledPaper(props) {
    const theme = useTheme();
    const title = props.title;

    return ( 
        <Paper elevation={7}
            sx={{
            height: 300,
            width: 250}}>
            <ListItem divider align-items='center' sx={{backgroundColor:'#7ccfde', height:40}}>{title}</ListItem>
            <ListItem divider sx={{height:220}}></ListItem>
            <ListItem divider sx={{backgroundColor:'#7ccfde', bottom:'0px', height:40}}>
            <Slider
                aria-label="Temperature"
                defaultValue={5}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                color='secondary'
                max={10}
            />
            </ListItem>
        </Paper> 
    );
}

export default StyledPaper;