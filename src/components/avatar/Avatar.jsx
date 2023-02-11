export default function Avatar({verified = false, dinamicWidth = "90px", dinamicHeight = "90px", imageUrl= "/images/avatar.png"}) {

    let size = {
        width: dinamicWidth,
        height: dinamicHeight
        // background: "red"
    }

    let verifiedBadgeDisplay = {
        display: "none"
    }

    if(verified) {
        verifiedBadgeDisplay.display = "block";
    }

    console.log("verified");
    console.log(verified);

    return(
        <div className="avatar" style={size}>
            <img src={imageUrl} className="image" width="100%" alt="avatar"></img>
            <img src="/images/verified.svg" style={verifiedBadgeDisplay}  className="badge" alt="badge" />
        </div>
    );
}