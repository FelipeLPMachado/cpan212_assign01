import React, { useState, useEffect } from 'react';
import StudentList from './components/StudentList';
import CourseList from './components/CourseList';
import AddStudent from './components/AddStudent';
import AddCourse from './components/AddCourse';
import { fetchStudents, fetchCourses } from './api';

function App() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchStudents().then(response => setStudents(response.data));
    fetchCourses().then(response => setCourses(response.data));
  }, []);

  return (
    <div>
      <h1>Student-Course Application</h1>
      <AddStudent setStudents={setStudents} />
      <AddCourse setCourses={setCourses} />
      <StudentList students={students} setStudents={setStudents} />
      <CourseList courses={courses} setCourses={setCourses} />
    </div>
  );
}

export default App;
