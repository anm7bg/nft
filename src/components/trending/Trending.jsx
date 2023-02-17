import { Container, Grid } from "@mui/material";

export default function Trending(name, url, verified, mediaUrl, price, curency) {

    return(
        <Container>
            <div><h1>Trendung</h1></div>
            <div>
            <FormControl fullWidth>
                <InputLabel id="simple-select-label">Age</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="This week"
                    onChange={handleChange}
                >
                    <MenuItem value={"one"}>Ten</MenuItem>
                    <MenuItem value={"two"}>Twenty</MenuItem>
                    <MenuItem value={"three"}>Thirty</MenuItem>
                </Select>
            </FormControl>
            </div>
            <Grid container>
                <Grid item>
                    <Card />
                </Grid>
                <Grid item>
                    <Card />
                </Grid>
                <Grid item>
                    <Card />
                </Grid>
                <Grid item>
                    <Card />
                </Grid>
            </Grid>
        </Container>
    );
}