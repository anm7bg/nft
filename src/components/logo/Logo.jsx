import * as React from "react";


export default function Logo({type = "default"}) {
  
//    let type = "default";
    console.log("type");
    console.log(type);

    let imgSrc =  "images/logo.svg";


    if(type === "muted") {
        imgSrc = "images/logo-muted.svg";
    }



    return (
        <img src={ imgSrc } type={ type} alt="logo" ></img>
    );
}

