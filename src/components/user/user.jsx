import Avatar from "../avatar/Avatar";

export default function User({name="", info="", avatar="", size=55, verified=false}) {

    return(
        <div className="user">
            <Avatar />
            <div>
                <p className="name">{name}</p>
                <p className="info">{info}</p>
            </div>
        </div>
    );
}