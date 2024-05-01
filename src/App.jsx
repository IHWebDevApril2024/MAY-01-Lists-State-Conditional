import "./App.css";
import AnimalsExampleContainer from "./components/AnimalsExampleContainer";
import StudentsExample from "./components/StudentsExample";
import RecipesContainer from "./components/RecipesContainer";
import UseStateComponent from "./components/UseStateComponent";
import TernaryOperator from "./components/TernaryOperator";
import { useState } from "react";
import RecipesConditional from "./components/RecipesConditional";

function App() {
  // For testing purposes we changed the title of the app so we can see how all the components are re-rendered
  const [title, setTitle] = useState("LISTS / ARRAYS");
  function changeTitle() {
    setTitle("THIS IS THE NEW TITLE I don't even know what I'm doing");
  }
  const [beforeTheBreak, setBeforeTheBreak] = useState(true);

  document.addEventListener("keydown", (event) => {
    // We went crazy here with the event listener 😣
    console.log(event.key);
    if (event.key === "Enter") {
      changeTitle();
    }
  });

  if (beforeTheBreak) {
    return (
      <>
        <h1>{title}</h1>
        <button onClick={() => setBeforeTheBreak(false)}>
          See the rest of the class
        </button>
        <AnimalsExampleContainer />
        <StudentsExample />
        <RecipesContainer />
        <UseStateComponent />
      </>
    );
  } else {
    return (
      <>
        <h1>It's lunch time</h1>
        <button onClick={() => setBeforeTheBreak(true)}>
          See the previous part
        </button>
        <TernaryOperator />
        <RecipesConditional />
      </>
    );
  }
}

export default App;
