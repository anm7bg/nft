import Logo from "../logo/Logo";
import classNames from "classnames";
import styles from "./Footer.module.scss";
import { Container, Grid, Button } from "@mui/material";

export default function Footer() {

    return(
        <div className={classNames(styles.wrapper)}>
        <Container component="footer" className={classNames(styles.container)} maxWidth="xl">
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Logo />
            </Grid>
            <Grid item xs={4}>
                <p>Copyright ©2023</p>
            </Grid>
            <Grid item xs={4}>
                <Button className={styles.button} variant="text">Privacy Policy</Button>
                <Button className={styles.button} variant="text">Cookie Policy</Button>
            </Grid>
        </Grid>
        </Container>
      </div>
    );
}