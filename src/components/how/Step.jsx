import styles from "./Step.module.scss"
import { Grid } from "@mui/material";


export default function Step({ number, title, description }) {

    return(
        <div className={styles.how}>
            <Grid container spacing={2}>
                <Grid item className={styles.number} xs={4}>
                    <p>{ number }</p>
                </Grid>
                <Grid item xs={4}>
                    <h2>{ title }</h2>
                    <p>{ description }</p>
                </Grid>
            </Grid>
        </div>        
    );
}