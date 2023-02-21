import styles from "./Featured.module.scss";
import classNames from "classnames";
import { Container, ImageList, ImageListItem } from "@mui/material";
import { useRouter } from 'next/router'

export default function Featured( { items =[] } ) {

    const router = useRouter();

    return (
        <div className={classNames(styles.wrapper)}>
        <Container className={classNames(styles.container)} maxWidth="xl">
          <ImageList 
          className={styles.imageList}
        //   rows={ 4 }
          cols={ 6 }
          >
            {items.map((item, index) => (
            <ImageListItem 
            key={index}>
            cols = { item.cols || 1 }
            rows = { item.rows || 1 }
                <img
                
                    src={ item.image }
                    alt={ item.title }
                    loading="lazy"
                    onClick={ () => router.push(item.href) }
                />
                </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </div>
    );
}