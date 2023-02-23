import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";
import Logo from "../../src/components/logo/Logo"
import Header from "../../src/components/header/Header";
import Avatar from "../../src/components/avatar/Avatar";
import User from "../../src/components/user/User";
import Card from "../../src/components/card/Card";
import Trending from "../../src/components/trending/Trending";
import Auctions from "../../src/components/auctions/Auctions";
import Footer from "../../src/components/footer/Footer";
import How from "../../src/components/how/How";
import Featured from "../../src/components/featured/Featured";
import CollectorColumn from "../../src/components/collectors/CollectorColumn";
import Collector from "../../src/components/collectors/Collector";

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
      {/* <Avatar /> */}
      {/* <User name="Ivan" info="User info" /> */}
      {/* <Card likes="1000000" price={100} currency="ETH" mediaUrl="/images/avatar.png" /> */}
      {/* <Trending /> */}
      {/* <Auctions /> */}
      {/* <Footer /> */}
      {/* <How /> */}
      {/* <Featured /> */}
      {/* <Collector/> */}
      <CollectorColumn />
      {/* <User /> */}
    </Container>
  );
}