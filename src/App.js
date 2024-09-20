import React from "react"; // Only necessary for React 17 or earlier
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "./style/LandingPage.css";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Horror from "./components/Horror";
import Upcoming from "./components/upcoming";

function App() {
  return (
    <div className="app-container">
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="horror">
        <Horror />
      </div>
      <div className="Upcoming">
        <Upcoming />
      </div>
    </div>
  );
}

export default App;
