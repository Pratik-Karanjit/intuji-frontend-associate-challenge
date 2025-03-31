import React from 'react';
import "./index.css";
import Dashboard from "./components/Dashboard.jsx";
import { Route, Routes } from 'react-router-dom';
import Schedule from './components/Schedule.jsx';
import Messages from './components/Messages.jsx';
import Analytics from './components/Analytics.jsx';
import Teams from './components/Teams.jsx';
import Profile from './components/Profile.jsx';
import { Settings } from 'lucide-react';
import Help from './components/Help.jsx';
import Logout from './components/Logout.jsx';

const MyRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} exact />
        <Route path="/schedule" element={<Schedule />} exact />
        <Route path="/messages" element={<Messages />} exact />
        <Route path="/analytics" element={<Analytics />} exact />
        <Route path="/teams" element={<Teams />} exact />
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/settings" element={<Settings />} exact />
        <Route path="/help" element={<Help />} exact />
        <Route path="/logout" element={<Logout />} exact />
      </Routes>
    </>
  );
}

export default MyRouter;
