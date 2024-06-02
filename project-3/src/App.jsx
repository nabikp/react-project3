//import styled from "styled-components";
import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
      {/* <Button>This is styled component Button</Button> */}
    </>
  );
}

export default App;

// const Button = styled.button`
//   background-color: black;
//   color: white;
//   padding: 10px;
// `;
