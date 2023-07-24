import React from "react";
import style from "./jokesLeftBar.module.css"
import iconBig from "../SmileIcon/smileBig.png"
import { Link } from "react-router-dom";

export class JokesLeftBar extends React.Component {
    render() {
        return (
          <div className={style.jokesLeftBar}>
            <div>
              <span>Dad</span> Jokes
            </div>
            <div className={style.icon}>
              <img src={iconBig} alt="icon" />
            </div>
            <button>
                <Link to="/start" className={ style.button}>New Jokes</Link>
            </button>
          </div>
        );
    }
}