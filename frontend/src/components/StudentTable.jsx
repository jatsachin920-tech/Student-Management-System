
import React from 'react';

const StudentTable = ({ students }) => {
    return (
        <table border="1" className="student-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Roll No</th>
                    <th>Class</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student._id}>
                        <td>{student.name}</td>
                        <td>{student.RollNo}</td>
                        <td>{student.class}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StudentTable;