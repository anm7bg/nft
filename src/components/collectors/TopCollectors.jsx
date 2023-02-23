import styles from "./TopCollectors.module.scss";
import _ from "lodash";
import { Grid } from "@mui/material";
import CollectorColumn from "./CollectorColumn";
import PageHeader from "../header/PageHeader";

export default function TopCollectors( {collectors=[]} ) {

    // var _ = require('lodash/core');

    // var chunk = require('lodash.chunk');

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
        // console.log(item)
    })

    // console.log(collectors);

    let collectorsChunk = _.chunk(collectors, 3);

    // console.log(collectorsChunk);

    return(
        <div className={styles.TopCollectors}>
           <PageHeader title="Top Collectors" />
            <Grid>
                {
                    collectorsChunk.map((item, index) => 
                            <Grid item key={ index }>
                                {/* {console.log(item)} */}
                                <CollectorColumn items={ item } />
                            </Grid>
                    )
                }
            </Grid>
        </div>
    );
}