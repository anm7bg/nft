import { Container, Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Card from '../card/Card';


export default function Trending({title, cards=[], name, url, verified, mediaUrl, price, curency}) {

    return(
        <Container fixed>
            <Container>
                <div><h1>{title}</h1></div>
                <div>
                <FormControl fullWidth>
                    <InputLabel id="simple-select-label">Age</InputLabel>
                    <Select
                        labelId="simple-select-label"
                        id="demo-simple-select"
                        value=""
                        label="This week"
                        // onChange={handleChange}
                    >
                        <MenuItem value={"one"}>Ten</MenuItem>
                        <MenuItem value={"two"}>Twenty</MenuItem>
                        <MenuItem value={"three"}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                </div>
            </Container>
           
            <Grid container>
                <Grid item>
                    <Card title />
                </Grid>
                <Grid item>
                    <Card title/>
                </Grid>
                <Grid item>
                    <Card title />
                </Grid>
                <Grid item>
                    <Card title />
                </Grid>
            </Grid>
        </Container>
    );
}