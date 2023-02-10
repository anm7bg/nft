
export default function Logo(props) {
  
    let type = "default";

    let src = "";

    if(type="default") {
        src = "../../../public/images/logo.svg"
    }else {
        src = "../../../public/images/logo-muted.svg"
    }

    let Logo = <img src={ src } type={ type } alt="logo" ></img>;

    return (
        Logo
    );
}