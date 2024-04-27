import { useState, useEffect } from 'react';
import logo from './assets/hogwarts.png';
import './App.css';

function App() {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('http://localhost:3000/dummy/students'); // URL replace
      const data = await response.json();
      setStudents(data);
    };

    fetchStudents();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Here is a list of all students:</p>
        <div className="App-intro">
          {students ? students.map(student =>
          //Add styles
            <div key={student.id} className={`Student-card ${student.house}`}>
              <div className="Student-name">{student.name}</div>
              <div className="Student-house">House : {student.house}</div>
            </div>
          ) : "Loading..."}
        </div>
      </header>
    </div>
  );
}

export default App;