
import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = ({ onStudentAdded }) => {
    const [formData, setFormData] = useState({ name: "", RollNo: "", class: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/students/new", formData);
            setFormData({ name: "", RollNo: "", class: "" });
            onStudentAdded(); // Yeh function list ko refresh karega
            alert("Student Added Successfully!");
        } catch (err) {
            console.error("Error adding student:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input 
                type="text" placeholder="Name" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
            />
            <input 
                type="text" placeholder="Roll No" 
                value={formData.RollNo} 
                onChange={(e) => setFormData({...formData, RollNo: e.target.value})} 
            />
            <input 
                type="text" placeholder="Class" 
                value={formData.class} 
                onChange={(e) => setFormData({...formData, class: e.target.value})} 
            />
            <button type="submit">Add Student</button>
        </form>
    );
};

export default StudentForm;