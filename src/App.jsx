import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import TriageDashboard from './pages/TriageDashboard';
import Patients from './pages/Patients';
import Schedule from './pages/Schedule';
import Inventory from './pages/Inventory';
import Reports from './pages/Reports';
import styles from './App.module.css';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <Sidebar
          mobileOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div className={styles.contentArea}>
          <TopBar onMenuClick={() => setSidebarOpen(prev => !prev)} />

          <Routes>
            <Route path="/"          element={<TriageDashboard />} />
            <Route path="/patients"  element={<Patients />} />
            <Route path="/schedule"  element={<Schedule />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/reports"   element={<Reports />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
