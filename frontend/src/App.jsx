import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Portal from './pages/Portal';
import AdminDashboard from './pages/AdminDashboard';
import ManageStudents from './pages/ManageStudents';
import ManageNews from './pages/ManageNews';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"               element={<Portal />} />
        <Route path="/admin"          element={<AdminDashboard />} />
        <Route path="/admin/students" element={<ManageStudents />} />
        <Route path="/admin/news"     element={<ManageNews />} />
      </Routes>
    </BrowserRouter>
  );
}