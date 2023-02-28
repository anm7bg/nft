import { Link } from "@mui/material";
import * as React from "react";


export default function Logo({type = "muted"}) {
  
//    let type = "default";
    console.log("type");
    console.log(type);

    let imgSrc =  "images/logo.svg";


    if(type === "muted") {
        imgSrc = "images/logo-muted.svg";
    }



    return (
        <Link href="/">
            <img src={ imgSrc } type={ type} alt="logo" ></img>
        </Link>
    );
}

