import React from "react";
import { JokesCard } from "../JokesCard/jokesCard";



export class JokesList extends React.Component{
    render() {
        const { data } = this.props
        console.log(data);
        const content = data?.map(item => <JokesCard key={item.id} {...item} />)
    
        return (
            <div>
                <div>
                    {content}
                </div>
            </div>
        )
    }
}