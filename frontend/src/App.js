import React, { useState, useEffect } from "react";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import { getAllStudents, deleteStudent } from "./services/api";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [search, setSearch] = useState("");

  // All students fetch చేయి
  const fetchStudents = async () => {
    const res = await getAllStudents();
    setStudents(res.data.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Delete student
  const handleDelete = async (id) => {
    if (window.confirm("Delete చేయాలా?")) {
      await deleteStudent(id);
      fetchStudents();
    }
  };

  // Search filter
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>🎓 Student Management System</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      {/* Add Button */}
      <button className="btn-add" onClick={() => setShowAdd(true)}>
        ➕ Add Student
      </button>

      {/* Add Student Form */}
      {showAdd && (
        <AddStudent
          onClose={() => setShowAdd(false)}
          onAdd={fetchStudents}
        />
      )}

      {/* Edit Student Form */}
      {editStudent && (
        <EditStudent
          student={editStudent}
          onClose={() => setEditStudent(null)}
          onUpdate={fetchStudents}
        />
      )}

      {/* Students List */}
      <StudentList
        students={filteredStudents}
        onDelete={handleDelete}
        onEdit={setEditStudent}
      />
    </div>
  );
}

export default App;