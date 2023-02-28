import Logo from "../logo/Logo";
import classNames from "classnames";
import styles from "./Footer.module.scss";
import { Container, Grid, Button } from "@mui/material";

export default function Footer() {

    return(
        <Container component="footer" className={styles.footer}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Logo />
                </Grid>
                <Grid className={styles.copyrights} item xs={3}>
                    <p>Copyright ©2023</p>
                </Grid>
                <Grid item xs={5}>
                    <Button className={styles.button} variant="text">Privacy Policy</Button>
                    <Button className={styles.button} variant="text">Cookie Policy</Button>
                </Grid>
            </Grid>
        </Container>
    );
}