import styles from "./Avatar.module.scss";

export default function Avatar({size=90, verified = true, url = "/images/avatar.png"}) {


    let verifiedBadgeDisplay = {
        display: "none"
    }

    if(verified) {
        verifiedBadgeDisplay.display = "block";
    }

    console.log("size");
    console.log(size);

    return(
        <div className={styles.avatar} style={ {width:size, height:size} }>
            <img src={ url } className={styles.image} width="100%" alt="avatar"></img>
            <img src="/images/verified.svg" style={ verifiedBadgeDisplay }  className={styles.badge} alt="badge" />
        </div>
    );
}
