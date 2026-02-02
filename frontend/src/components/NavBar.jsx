import { UserCircle, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ student }) => {
  const navigate = useNavigate();
  return (
    <div className="welcome-banner sticky-nav">
      <div className="student-info-text">
        <h1>Hello, {student?.name || 'Loading...'}!</h1> 
        <div className="para">
          <div className="para-item1">Class: <b>{student?.class}</b></div>&nbsp;
          <div className="para-item2">Roll No: <b>{student?.rollNo}</b></div>
        </div>
        <p>Organization &nbsp;&nbsp; Sai Shree International Academy</p>
      </div>
      <div className="nav-icons">
        <UserCircle size={35} className="profile-icon" onClick={() => navigate('/student/profile')}/>
        <LogOut size={25} className="logout-icon" onClick={() => {
           localStorage.removeItem('token'); // Logout logic
           window.location.href = '/login';
        }}/>
      </div>
    </div>
  );
};

export default NavBar;