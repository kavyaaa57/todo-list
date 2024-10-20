import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'; // Replace with your actual component imports
import TodoList from './components/TodoList/TodoList';
// Import other components as needed

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TodoList" element={<TodoList />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
