import { 
  Calendar, CreditCard, Bus, 
  FileText, Bell, UserCircle 
} from 'lucide-react';

export const menuItems = [
  { 
    id: 1, 
    title: "Attendance", 
    icon: <Calendar size={40} />, 
    color: "#4ade80", 
    path: "/student/attendance" 
  },
  { 
    id: 2, 
    title: "Fees", 
    icon: <CreditCard size={40} />, 
    color: "#fbbf24", 
    path: "/student/fees" 
  },
  { 
    id: 3, 
    title: "Transport", 
    icon: <Bus size={40} />, 
    color: "#60a5fa", 
    path: "/student/transport" 
  },
  { 
    id: 4, 
    title: "Exam Marks", 
    icon: <FileText size={40} />, 
    color: "#f87171", 
    path: "/student/marks" 
  },
  { 
    id: 5, 
    title: "Notice", 
    icon: <Bell size={40} />, 
    color: "#a78bfa", 
    path: "/student/notices" 
  },
  { 
    id: 6, 
    title: "Student Info", 
    icon: <UserCircle size={40} />, 
    color: "#2dd4bf", 
    path: "/student/profile" 
  },
  { 
    id: 7, 
    title: "Assignment", 
    icon: <Calendar size={40} />, 
    color: "#60a5fa", 
    path: "/student/assignment" 
  },
  { 
    id: 8, 
    title: "Registration", 
    icon: <Calendar size={40} />, 
    color: "#4ade80", 
    path: "/student/registration" 
  },
  { 
    id: 9, 
    title: "Syllabus", 
    icon: <Bell size={40} />, 
    color: "#a78bfa", 
    path: "/student/syllabus" 
  }
];