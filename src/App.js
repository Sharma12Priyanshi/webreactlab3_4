import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (index) => {
    const newList = students.filter((_, i) => i !== index);
    setStudents(newList);
  };

  // 🔍 Search filter
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🔃 Sorting
  const sortedStudents = [...filteredStudents].sort((a, b) =>
    sortOrder === "asc"
      ? a.marks - b.marks
      : b.marks - a.marks
  );

  return (
    <div className="container">
      <h1>Student Scoreboard</h1>

      <StudentForm addStudent={addStudent} />

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🔃 Sort */}
      <button onClick={() => setSortOrder("asc")}>Sort ↑</button>
      <button onClick={() => setSortOrder("desc")}>Sort ↓</button>

      <StudentList
        students={sortedStudents}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default App;