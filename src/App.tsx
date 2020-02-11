import * as React from "react";
import "./styles.css";

export default function App() {
  return (
    <span>
      <h1>Next</h1>
      <Tasks>
        <Task projectName="Next" task="Create React Sketch" />
        <Task projectName="Pension" task="Go to tax" />
        <Task projectName="Pet Insurance" task="Call Tesco" />
      </Tasks>
    </span>
  );
}

const Tasks = ({ children }: { children: React.ReactNode }) => {
  return <ul className="tasks-container">{children}</ul>;
};

const Task = ({ projectName, task }: { projectName: string; task: string }) => (
  <li className="task-container">
    <span className="project-name"> {projectName}</span>
    <span className="task-description">{task}</span>
  </li>
);
