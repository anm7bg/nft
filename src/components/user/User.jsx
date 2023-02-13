import Avatar from "../avatar/Avatar";

export default function User({name=" ", info=" ", avatar=" ", size=55, verified=false}) {

    console.log("test")
    console.log("name ",name ," info ",info);

    return(
        <div className="user">
            <Avatar />
            <div className="userInfo">
                <p className="name">{name}</p>
                <p className="info">{info}</p>
            </div>
        </div>
    );
}