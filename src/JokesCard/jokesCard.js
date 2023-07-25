import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import style from "./jokesCard.module.css"
import jokesSmall from "../SmileIcon/happy-face.png"
import { PropTypes } from "prop-types";


class JokesCard extends React.Component {
  constructor() {
    super();
    this.state = {
      vote: 0,
    };

    this.icrementVote = this.icrementVote.bind(this);
    this.decrementVote = this.decrementVote.bind(this);
  }

  icrementVote(voteId) {
    const newVote = this.state.vote + 1;

    this.setState({ vote: newVote });
    this.props.addVoteItem(voteId, newVote);
  }

  decrementVote(voteId) {
    const newVote = this.state.vote - 1;

    this.setState({ vote: newVote });
    this.props.removeVoteItem(voteId, newVote);
  }

  render() {
    const { joke, id, vote } = this.props;

    let voteColors = ""

    if (vote === 0) {
      voteColors = "bad"
    } else if (vote < 3) {
      voteColors = "normal"
    } else if(vote < 5) {
      voteColors = "good"
    } else {
      voteColors = "veryGood"
    }
   

    return (
      <div className={style.jokesCard}>
        <div className={style.pointSection}>
          <button onClick={() => this.decrementVote(id)}>
            <AiOutlineArrowDown />
          </button>
          <span className={style[voteColors]}>{vote}</span>
          <button onClick={() => this.icrementVote(id)}>
            <AiOutlineArrowUp />
          </button>
        </div>
        <div>
          <p>{joke}</p>
        </div>
        <div className={style.icon}>
          <img src={jokesSmall} alt="icon"/>
        </div>
      </div>
    );
  }
}

JokesCard.propTypes = {
  addVoteItem: PropTypes.func,
  removeVoteItem: PropTypes.func,
};

export default JokesCard;