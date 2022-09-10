import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    setTimeout(() => {
      console.log("pushstate");
      window.location.href = "https://google.com/contact";
    }, 500);
  }, []);
  return (
    <div className="App">
      <img src="https://cdn.ebaumsworld.com/thumbs/2022/08/30/040042/87260281/Vitalik-Dong.jpg" />
    </div>
  );
}

export default App;
