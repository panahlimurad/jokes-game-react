import React from "react";
import style from "./jokesList.module.css"
import { JokesCard } from "../JokesCard/jokesCard";
import { PropTypes } from "prop-types";


export class JokesList extends React.Component {
  static defaultProps = {
    data: [],
};

  render() {
    const { data, addVoteItem, removeVoteItem } = this.props;
    console.log(data);
    const content = data?.map((item) => (
      <JokesCard
        key={item.id}
        addVoteItem={addVoteItem}
        removeVoteItem={removeVoteItem}
        {...item}
      />
    ));

    return (
      <div className={style.jokesList}>
        <div>{content}</div>
      </div>
    );
  }
}

JokesList.propTypes = {
  addVoteItem: PropTypes.func,
  removeVoteItem: PropTypes.func,
  data: PropTypes.array,
};