
function Logo(props) {
  
  let imgSrc =  "images/logo.svg";

    if(props.imgType === "muted") {
        imgSrc = "images/logo-muted.svg";
    // else if(props.type="muted") {
    //     props.src = "../../../public/images/logo-muted.svg"
    }



    let Logo = <img src={ imgSrc } type={ props.imgType } alt="logo" ></img>;


    return (
        Logo
    );
}

Logo.defaultProps = {
    imgeType: "default"
}

    export default Logo;