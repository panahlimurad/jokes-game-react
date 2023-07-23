import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export class JokesCard extends React.Component{
    render() {
        return (
          <div>
            <button>
              <AiOutlineArrowDown />
            </button>
            <button>
              <AiOutlineArrowUp />
            </button>
          </div>
        );
    }
}