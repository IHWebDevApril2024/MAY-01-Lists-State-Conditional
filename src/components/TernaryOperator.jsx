const TernaryOperator = () => {
  const isAdmin = false;
  const age = 13;

  // An if else statement
  if (isAdmin) {
    console.log("The user is admin");
  } else {
    console.log("The user is not admin");
  }

  return (
    <>
      <h2>Ternary operator</h2>
      {isAdmin ? (
        <p>You have access to the secrets of the bootcamp 😎</p>
      ) : (
        <p>You don't have access to this page, sorry 😣</p>
      )}

      <h2>And operator &&</h2>
      {age >= 18 && <p>You are an adult</p>}
    </>
  );
};

export default TernaryOperator;
