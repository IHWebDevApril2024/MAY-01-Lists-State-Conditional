import { useState } from "react"; // We import the useState hook from react, all the hooks start with the word "use"

const UseStateComponent = () => {
  // We can use the useState hook to create a state in a component
  // The first part of the array is the state itself, the second part is the function to change the state
  // We can pass the initial value of the state as an argument to the useState function
  const [number, setNumber] = useState(0); // We create a state called number with an initial value of 0
  const [name, setName] = useState("Marcos"); // We create a state called name with an initial value of "Marcos"
  // Every time we change the state, the component is re-rendered 
  console.log("THE USESTATECOMPOENT IS MOUNTED");

  const increaseNumber = () => {
    setNumber(number + 1); // When we set the state to a new value, the component is re-rendered. But it's still javascript, so we can't modify the const variable (number ++), we have to use the setNumber function 
  };

  const changeName = () => {
    if (name === "Marcos") {
      setName("Alonso");
    } else {
      setName("Marcos");
    }
  };

  return (
    <>
      <p>{number}</p>
      <button onClick={increaseNumber}>Increase</button>{" "}
      {/* the onClick event is used to trigger a function when the button is clicked */}
      <p>{name}</p>
      <button onClick={changeName}>Change the name</button>
    </>
  );
};

export default UseStateComponent;
