import { Container, FormControl, InputLabel, MenuItem, Select } from "@mui/material"

export default function PageHeader( {title} ) {

    return(
        <Container>
        <div><h1>{ title }</h1></div>
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
    );
}