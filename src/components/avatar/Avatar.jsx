export default function Avatar({verified = false, size={width:"90px", height:"90px"}, url = "/images/avatar.png"}) {

    // size = {
    //     width: "90px",
    //     height: "90px"
    //     // background: "red"
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
        <div className="avatar" style={ size }>
            <img src={ url } className="image" width="100%" alt="avatar"></img>
            <img src="/images/verified.svg" style={ verifiedBadgeDisplay }  className="badge" alt="badge" />
        </div>
    );
}
// Avatar.defaultProps = {
//     size:{width:"90px", height: "90px"}
// }