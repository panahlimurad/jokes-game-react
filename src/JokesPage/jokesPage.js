import React from "react";
import style from "./jokesPage.module.css"
import { JokesList } from "../JokesList/jokesList";
import { getJokes } from "../service/jokesAxios";
import { JokesLeftBar } from "../JokesLeftBar/jokesLeftBar";


export class JokesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      jokes: [],
    };

    this.addVoteItem = this.addVoteItem.bind(this);
    this.removeVoteItem = this.removeVoteItem.bind(this);
    this.voteProcess = this.voteProcess.bind(this);
  }

  
  async componentDidMount() {
    const response = await getJokes();
    
    const newJokes = response.data.results.map((item) => ({
      ...item,
      vote: 0,
    }));
    
    this.setState({
      jokes: newJokes,
    });
  }

  
  voteProcess(id, newVote) {
     const newJokes = [...this.state.jokes];

     const itemIndex = newJokes.findIndex((item) => item.id === id);

    newJokes[itemIndex].vote = newVote;
    
    newJokes.sort((a, b) => b.vote - a.vote);
    
     this.setState({
       jokes: newJokes,
     });
  
  }
  
  addVoteItem(id, newVote) {
    this.voteProcess(id, newVote)
  }

  removeVoteItem(id, newVote) {
    this.voteProcess(id, newVote);

  }

  render() {
    return (
      <div className={style.jokesPage}>
        <JokesList
          addVoteItem={this.addVoteItem}
          removeVoteItem={this.removeVoteItem}
          data={this.state.jokes}
        />
        <JokesLeftBar />
      </div>
    );
  }
}