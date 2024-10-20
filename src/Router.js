import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList/TodoList';
import CompletedTasks from './components/CompletedTasks/CompletedTasks';
import PendingTasks from './components/PendingTasks/PendingTasks';
import Home from './components/Home/home';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/completed-tasks" component={CompletedTasks} />
        <Route path="/pending-tasks" component={PendingTasks} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
