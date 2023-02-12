export default function Avatar({verified = false, size = "90px", url = "/images/avatar.png"}) {

    // let divSize = {
    //     width: size ,
    //     height: size
        // background: "red"
    // }

    let verifiedBadgeDisplay = {
        display: "none"
    }

    if(verified) {
        verifiedBadgeDisplay.display = "block";
    }

    console.log("size");
    console.log(size);

    return(
        <div className="avatar" style={ {width: size, height: size} }>
            <img src={ url } className="image" width="100%" alt="avatar"></img>
            <img src="/images/verified.svg" style={ verifiedBadgeDisplay }  className="badge" alt="badge" />
        </div>
    );
}