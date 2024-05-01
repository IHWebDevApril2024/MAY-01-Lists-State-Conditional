
const AnimalsExampleContainer = () => {
  console.log("THE ANIMALS COMPONENT IS MOUNTED");
  const simpleArray = [<p key={1}>Dog</p>, <p key={2}>Cat</p>, <p key={3}>My previous boss</p>];
  return (
    <>
      <h2>Name</h2>
      {simpleArray}
      <img src="" alt="" />
    </>
  );
};

/* function AnimalsExampleContainer() {
  return <h2>Helloo</h2>;
} */

export default AnimalsExampleContainer;
