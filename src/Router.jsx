import React from 'react';
import "./index.css";
import Dashboard from "./components/Dashboard.jsx";
import { Route, Routes } from 'react-router-dom';

const MyRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} exact />
      </Routes>
    </>
  );
}

export default MyRouter;
