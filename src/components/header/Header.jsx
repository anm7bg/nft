import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Header.module.scss";
import classNames from "classnames";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import Nav from "../nav/Nav";



export default function Header() {
    return(
      <div className={classNames(styles.wrapper)}>
        <Container className={classNames(styles.container)} maxWidth="lg">
          <Grid container spacing={2}>
              <Grid item xs={4}>
                <Logo />
              </Grid>
              <Grid item xs={4}>
                <Search />
              </Grid>
              <Grid item xs={4}>
                <Nav />
              </Grid>
            </Grid>
        </Container>
      </div>
    );
}