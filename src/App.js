import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      {/* <img
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          height: "40vh",
          width: "30vw",
          zIndex: 1,
        }}
        src={LoginBG}
        alt="background"
      /> */}
      <Form />
    </div>
  );
}

export default App;
