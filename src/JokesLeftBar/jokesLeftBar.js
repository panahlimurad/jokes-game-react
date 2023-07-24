import React from "react";
import style from "./jokesLeftBar.module.css"
import iconBig from "../SmileIcon/smileBig.png"

export class JokesLeftBar extends React.Component {
    render() {
        return <div className={style.jokesLeftBar}>
            <div><span>Dad</span>  Jokes</div>
            <div className={style.icon}>
                <img src={iconBig} />
            </div>
            <button>New Jokes</button>
        </div>;
    }
}