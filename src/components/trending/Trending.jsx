import { Container, Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Card from '../card/Card';
import PageHeader from "../header/PageHeader";
import styles from "./Trending.module.scss"



export default function Trending({ cards=[], }) {

    return(
        <Container className={styles.trending} maxWidth="xl">
            <PageHeader title="Trending" label="This week" />   
            <Container className={styles.trendingList}>
                <Grid container spacing={2}>
                    {cards.slice(0, 4).map((card, index) => (
                    <Grid item 
                        className={styles.trendingItem}
                        md={3} 
                        key={index}>
                        <Card {...card} badgeDisplay={{display:"none"}} />
                    </Grid>
                    ))}              
                </Grid>
            </Container>
        </Container>
    );
}