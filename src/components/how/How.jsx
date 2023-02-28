import { Container, Button, Grid } from "@mui/material";
import styles from "./How.module.scss";
import Step from "./Step"

export default function How( { description, title, items=[], link } ) {

    return(
        <div className={styles.how}>
            <div className={styles.main}>
                <h2>{ title }</h2>
                <p>{ description }</p>
                <Button href={ link } className={styles.button} variant="contained">LEARN MORE</Button>
            </div>
            <div className={styles.second}>
                {items.map((item, index)  => 
                    <Step key={ index } number={ index + 1 } title={ item.title } description={ item.description }  />
                )}
            </div>
        </div>
    );
}