
function Logo(type) {
  
    // let type = "default";
    console.log(type)

  let imgSrc =  "images/logo.svg";

    if(type.type === "muted") {
        imgSrc = "images/logo-muted.svg";
    // else if(props.type="muted") {
    //     props.src = "../../../public/images/logo-muted.svg"
    }



    let Logo = <img src={ imgSrc } type={ type } alt="logo" ></img>;


    return (
        Logo
    );
}

// Logo.defaultProps = {
//     imgeType: "default"
// }

    export default Logo;