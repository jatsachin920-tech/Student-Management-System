import React from 'react';
import StudentForm from '../../components/StudentForm';
import StudentTable from '../../components/StudentTable';

const TeacherDashboard = ({ students, fetchStudents }) => {
  return (
    <div>
      <h1>Teacher Panel (Admin)</h1>
      <StudentForm onStudentAdded={fetchStudents} />
      <StudentTable students={students} />
    </div>
  );
};
export default TeacherDashboard;