import { useState } from "react";

function Student(props) {
  const [marks, setMarks] = useState(50);

  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Subject: {props.subject}</h2>
      <h2>Marks: {marks}</h2>

      <button onClick={() => setMarks(marks + 10)}>
        Increase
      </button>

      <button onClick={() => setMarks(marks - 10)}>
        Decrease
      </button>
    </div>
  );
}

export default Student;