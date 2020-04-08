import React from "react";
import Header from "./components/header";
import TaskBar from "./components/taskbar";
import TaskList from "./components/tasklist";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <TaskBar></TaskBar>
        <TaskList></TaskList>
      </div>
    );
  }
}

export default App;
