import { Container, Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Card from '../card/Card';
import PageHeader from "../header/PageHeader";
import styles from "./Auctions.module.scss"

export default function Auctions({ cards=[], style }) {

   {cards.slice(0, 4).map((card=[], style) => (

    console.log({...card})
   ))}
    return(
        <Container className={styles.auctions}>
           <PageHeader title="Live Auctions" label="Price range" />
            <Grid container spacing={2}>
                {cards.slice(0, 4).map((card, index) => (
                <Grid item md={3} key={index}>
                    <Card { ...card } style={style} />
                </Grid>
                ))}              
            </Grid>
        </Container>
    );
}