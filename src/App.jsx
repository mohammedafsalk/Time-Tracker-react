import Profile from "./Components/Profile";
import data from "../data.json";
import Card from "./Components/Card";
import { useState } from "react";

function App() {
  const [time,setTime] = useState("daily")
  return (
    <div className="app">
      <Profile time={time} setTime={setTime} />
      {data.map((item, index) => (
        <Card key={index} item ={item} time={time} />
      ))}
    </div>
  );
}

export default App;
