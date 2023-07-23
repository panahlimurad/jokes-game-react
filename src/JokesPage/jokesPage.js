import React from "react";
import style from "./jokesPage.module.css"
import { JokesList } from "../JokesList/jokesList";
import { getJokes } from "../service/jokesAxios";


export class JokesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      jokes: [],
    };
  }

  async componentDidMount() {
    const response = await getJokes();

      const newJokes = response.data.results.map((item)=>({...item, vote:0,}))

      this.setState({
        jokes: newJokes,
      });
  }

    render() {
      
    return (
      <div>
            <JokesList data={this.state.jokes} />
      </div>
    );
  }
}