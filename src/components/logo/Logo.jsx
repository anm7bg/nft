import * as React from "react";

export default function Logo(props) {
  
    // type = "default";
    console.log("type");
    console.log(props.type);

    let imgSrc =  "images/logo.svg";


    if(props.type === "muted") {
        imgSrc = "images/logo-muted.svg";
    // else if(props.type="muted") {
    //     props.src = "../../../public/images/logo-muted.svg"
    }
    // else {
    //     type = "default";
    // };



    let Logo = <img src={ imgSrc } type={ props.type } alt="logo" ></img>;


    return (
        Logo
    );
}

// Logo.defaultProps = {
//     imgeType: "default"
// }
