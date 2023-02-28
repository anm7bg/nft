import styles from "./Step.module.scss"
import { Grid } from "@mui/material";


export default function Step({ number, title, description }) {

    return(
        <div className={styles.step_main}>
            <Grid container className={styles.step}>
                <Grid item className={styles.number} xs={3}>
                    <p>{ number }</p>
                </Grid>
                <Grid className={styles.info} item xs={9}>
                    <h2>{ title }</h2>
                    <p>{ description }</p>
                </Grid>
            </Grid>
        </div>        
    );
}