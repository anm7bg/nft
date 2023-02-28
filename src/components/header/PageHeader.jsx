import { Container, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import styles from "./PageHeader.module.scss"

export default function PageHeader( {title, label} ) {

    return(
        <Container className={styles.pageHeader}>
            <div className={styles.title}><h1>{ title }</h1></div>
            <div className={styles.form}>
                <FormControl fullWidth>
                    <InputLabel id="simple-select-label">{ label }</InputLabel>
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