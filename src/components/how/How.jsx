import { Container, Button, Grid } from "@mui/material";
import styles from "./How.module.scss";

export default function How( { description, title, items=[], link } ) {

    return(
        <div className={styles.wrapper}>
            <Container className={styles.how} maxWidth="xl">
                <main>
                    <h2>{ title }</h2>
                    <p>{ description }</p>
                    <Button href={ link } variant="contained">LEARN MORE</Button>
                </main>
                <aside>
                    <Grid container spacing={2}>
                        {items.map((item, index)  => 
                             <Grid item>
                                <Step key={ index } number={ index + 1 } title={ item.title } description={ item.description }  />
                            </Grid>
                        )}
                    </Grid>
                </aside>
            </Container>
      </div>
    );
}