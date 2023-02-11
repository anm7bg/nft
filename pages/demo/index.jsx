import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";
import Logo from "../../src/components/logo/Logo"
import Header from "../../src/components/header/Header";
import Avatar from "../../src/components/avatar/Avatar";

export default function About() {
  return (
    <Container maxWidth="xl">
      <Header />
      <Grid container justifyContent="center">
        <Grid item>
          <Button variant="contained" component={Link} noLinkStyle href="/">
            🏠 Home
          </Button>
        </Grid>
      </Grid>
      <Avatar verified="true" dinamicWidth="200px" dinamicHeight="200px"/>
    </Container>
  );
}