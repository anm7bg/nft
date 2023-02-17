import { Container, Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Card from '../card/Card';


export default function Trending({ cards=[], title}) {

    function cardsMap() {
            return(
                cards.map(card =>
                    <Grid item>
                        <Card title={card.name} />
                    </Grid>) 
        );
    }

    return(
        <Container fixed>
            <Container>
                <div><h1>Trending</h1></div>
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
                {cardsMap()}
               
            </Grid>
        </Container>
    );
}