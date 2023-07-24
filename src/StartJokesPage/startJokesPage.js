import React from "react";
import style from "./startJokesPage.module.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export class StartJokesPage extends React.Component{
    render() {
        return (
          <motion.div
            className={style.startJokesPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <button>
              <Link to="/jokes">Start Jokes</Link>
            </button>
          </motion.div>
        );
    }
}