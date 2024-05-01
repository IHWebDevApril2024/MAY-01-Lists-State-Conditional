const StudentsExample = () => {
  const studentsArray = ["John", "Jane", "Alex", "Sarah"];
  return (
    <>
      <h2>Students</h2>
      {studentsArray.map((student, index) => {
        return (
          <div key={index} className="student-container">
            <h3>{student}</h3>
          </div>
        );
      })}
    </>
  );
};

export default StudentsExample;
