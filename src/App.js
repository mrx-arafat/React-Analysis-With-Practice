import logo from "./logo.svg";
import "./App.css";

function App() {
  var nameF = "React";

  const xxx = {
    backgroundColor: "black",
    color: "white",

    fontWeight: "500",
  };

  const nayoks = ["arafat", "salman", "james", "doge"];

  return (
    <div style={xxx} className="App">
      <p>I love {nameF}</p>

      <ul>
        <li>{nayoks[0]}</li>
        <li>{nayoks[1]}</li>
        <li>{nayoks[2]}</li>
        <li>{nayoks[3]}</li>
      </ul>

      <p>efficient dynamic:</p>
      <ul>
        {nayoks.map((nk) => (
          <li>{nk}</li>
        ))}
      </ul>

      <Friend
        name="Easin Arafat"
        address="Jashore"
        contact="01312300321"
      ></Friend>
      <Friend
        name="Easin Arafat"
        address="Jashore"
        contact="01312300321"
      ></Friend>
      <Friend
        name="Easin Arafat"
        address="Jashore"
        contact="01312300321"
      ></Friend>
      {/* <Student Name="Arafat" Nayika="tasnim"></Student>
      <Student Name="easin" Nayika="cheka"></Student>
      <Student Name="easin" Nayika="cheka"></Student>
      <Student Name="easin" Nayika="cheka"></Student>
      <Student anything="object" Nayika="Kopila"></Student> */}
    </div>
  );
}

export default App;

function Student(props) {
  console.log(props);
  return (
    <div className="student">
      <h3>{props.Name}</h3>
      <h4>hero of :{props.Nayika}</h4>
      <p>Profession: Web Developer</p>
    </div>
  );
}

function Friend(props) {
  console.log(props);

  return (
    <div className="student">
      <h4> name :{props.name}</h4>
      <h4> address :{props.address}</h4>
      <h4>contact :{props.contact}</h4>
    </div>
  );
}
