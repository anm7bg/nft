import { Container, Button } from "@mui/material";
import styles from "./How.module.scss";

export default function How({ description, title, items=[], link }) {

    return(
        <div className={styles.wrapper}>
            <Container className={styles.container} maxWidth="xl">
                <main>
                    <h2>{ title }</h2>
                    <p>{ description }</p>
                    <Button href={ link } variant="contained">LEARN MORE</Button>
                </main>
                <aside>
                    <Grid container spacing={2}>
                        {items.map(step, index  => 
                             <Grid item>
                                <Step number={index} {...step} />
                            </Grid>
                        )}
                    </Grid>
                </aside>
            </Container>
      </div>
    );
}