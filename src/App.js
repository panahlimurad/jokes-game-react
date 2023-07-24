import React from "react";
import { JokesPage } from "./JokesPage/jokesPage";
import { StartJokesPage } from "./StartJokesPage/startJokesPage";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


export class App extends React.Component {

  render() {
    return (
      <Router>
        <AnimatePresence>
          <Routes>
            <Route path="/start" element={<StartJokesPage />} />
            <Route path="/jokes" element={<JokesPage />} />
          </Routes>
        </AnimatePresence>
      </Router>
    );
  }
}