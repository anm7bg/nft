import logo from "../../../public/images/logo.png"
export default function Logo() {
  
    let type = "default";

    let src = "";

    if(type="default") {
        src = "../../../public/images/logo.svg"
    }else {
        src = "../../../public/images/logo-muted.svg"
    }

    return (
        <img src={ src } type={ type } alt="logo" ></img>
    );
}