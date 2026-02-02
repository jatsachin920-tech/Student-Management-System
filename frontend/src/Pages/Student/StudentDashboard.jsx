import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { menuItems } from "../../data/menuData.jsx" // Data list ko alag file mein rakhein
import MenuCard from '../../components/MenuCard.jsx';
import Banner from '../../components/NavBar.jsx';
import './StudentDashboard.css';                         
                                 
const StudentDashboard = () => {       
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState(null);
      
  useEffect(() => { 
    const fetchProfile = async () => { 
      try { 
        // Maan lete hain login ke waqt aapne token save kiya tha
        const token = localStorage.getItem('token'); 
        if (!token) return navigate('/login');

        // Backend se student ka data fetch karna (Apne Schema ke hisaab se)
        const response = await axios.get('http://localhost:5000/api/student/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        setStudentData(response.data); // Database ka data state mein set ho gaya
      } catch (err) { 
        console.error("Data load nahi ho paya", err);
        navigate('/login'); 
      }
    };

    fetchProfile();
  }, [navigate]);

  return (
    <div className="student-db-container">
      {/* Banner ko dynamic data pass kiya */}
      <Banner student={studentData} />

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} navigate={navigate} />
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;