// Navbar.js
import React from 'react';
import './Navbar.css'; 

function Navbar({ isOpen, toggleNavbar }) {
  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleNavbar}>✖</button>
      <ul>
        <li><a href="#add-todo">Add TODO</a></li>
        <li><a href="/completed-tasks">Completed Tasks</a></li>
        <li><a href="/pending-tasks">Pending Tasks</a></li>
        <li><a href="#about">Settings</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
