import Logo from "../logo/Logo";

export default function Footer() {

    return(
        <div className={classNames(styles.wrapper)}>
        <Container component="footer" className={classNames(styles.container)} maxWidth="xl">
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Item><Logo /></Item>
            </Grid>
            <Grid item xs={4}>
                <Item><p>Copyright ©2023</p></Item>
            </Grid>
            <Grid item xs={4}>
                <Item><Button variant="text">Privacy Policy</Button></Item>
                <Item><Button variant="text">Cookie Policy</Button></Item>
            </Grid>
        </Grid>
        </Container>
      </div>
    );
}