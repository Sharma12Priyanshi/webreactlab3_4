import React from "react";

function getGrade(marks) {
  if (marks >= 90) return "A";
  if (marks >= 75) return "B";
  if (marks >= 50) return "C";
  return "F";
}

function StudentList({ students, deleteStudent }) {
  return (
    <div>
      <h2>Student List</h2>

      {students.map((s, i) => (
        <div key={i} className="card">
          <p>
            <strong>{s.name}</strong> - {s.marks} marks  
            (Grade: {getGrade(Number(s.marks))})
          </p>

          <button className="delete" onClick={() => deleteStudent(i)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;