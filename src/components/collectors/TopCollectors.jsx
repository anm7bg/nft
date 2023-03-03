import styles from "./TopCollectors.module.scss";
import _ from "lodash";
import { Container, Grid } from "@mui/material";
import CollectorColumn from "./CollectorColumn";
import PageHeader from "../header/PageHeader";


export default function TopCollectors( {collectors=[]} ) {

    // collectors = [
    //     {
    //         name: "Ivan",
    //         nftsCount: 10,
    //         verified: true,
            
    //     },
    //     {
    //         name: "Ivan",
    //         nftsCount: 10,
    //         verified: true,
            
    //     },
    //     {
    //         name: "Ivan",
    //         nftsCount: 10,
    //         verified: true,
            
    //     },
    //     {
    //         name: "Ivan",
    //         nftsCount: 10,
    //         verified: true,
            
    //     },
    //     {
    //         name: "Ivan",
    //         nftsCount: 10,
    //         verified: true,
            
    //     },
    //     {
    //         name: "Ivan",
    //         nftsCount: 10,
    //         verified: true,
            
    //     },
    //     {
    //         name: "Ivan",
    //         nftsCount: 10,
    //         verified: true,
            
    //     },
    //     {
    //         name: "Ivan",
    //         nftsCount: 10,
    //         verified: true,
            
    //     },
    //     {
    //         name: "Ivan",
    //         nftsCount: 10,
    //         verified: true,
            
    //     }
    // ]

    collectors.map((item, index) => {
        item.id = index + 1
    })

    let collectorsChunk = _.chunk(collectors, 3);

    return(
        <Container className={styles.TopCollectors} maxWidth="xl">
            <PageHeader title="Top Collectors" label="Sort by"/>
               <Container className={styles.TopCollectors}>
                <Grid container spacing={2}>
                        {
                            collectorsChunk.map((item, index) => 
                                <Grid item className={styles.collectorsCol} key={ index } xs={3}>
                                    <CollectorColumn number={index+1} items={ item } />
                                </Grid>
                            )
                        }
                    </Grid>
               </Container>
        </Container>
    );
}