import logo from "./logo.svg";
import "./App.css";

function App() {
  var nameF = "React";

  const xxx = {
    backgroundColor: "black",
    color: "white",
    height: "100vh",

    fontWeight: "500",
  };
  return (
    <div style={xxx} className="App">
      <p>I love {nameF}</p>

      <Student Name="arafat" Nyika></Student>
      <Student></Student>
      <Student></Student>
      <Student></Student>
    </div>
  );
}

export default App;

function Student(props) {
  console.log(props);
  return (
    <div className="student">
      <h3>Easin Arafat</h3>
      <p>Profession: Web Developer</p>
    </div>
  );
}
