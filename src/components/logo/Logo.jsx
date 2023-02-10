
export default function Logo(props) {
  
    let type = "default";

    let src = "";

    if(props.type="default") {
        props.src = "../../../public/images/logo.svg"
    }
    else if(props.type="muted") {
        props.src = "../../../public/images/logo-muted.svg"
    }

    let Logo = <img src={ props.src } type={ props.type } alt="logo" ></img>;

    return (
        Logo
    );
}