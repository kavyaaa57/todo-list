import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure this file exists in the same directory

// Import images (make sure to replace these paths with your actual image paths)
import taskManagementImg from '../../images/task_management.png';
import priorityLevelsImg from '../../images/priority_levels.png';
import languageSupportImg from '../../images/language_support.png';
import accessibilityImg from '../../images/accessibility.png';
import darkModeImg from '../../images/dark_mode.png';
import voiceAssistanceImg from '../../images/voice_assistance.png';
import timezoneSupportImg from '../../images/timezone_support.png';


const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Your TODO List App!</h1>
        <p>
          Organize your tasks efficiently. Create, edit, and delete your tasks with ease. 
          Stay productive and never forget a task again!
        </p>
      </header>
      
      <section className="home-features">
        <h2>Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <img src={taskManagementImg} alt="Task Management" />
            <h3>Task Management</h3>
            <p>Easily add, edit, and delete tasks.</p>
          </div>
          <div className="feature-item">
            <img src={priorityLevelsImg} alt="Priority Levels" />
            <h3>Priority Levels</h3>
            <p>Set priority levels for your tasks to focus on what matters.</p>
          </div>
          <div className="feature-item">
            <img src={languageSupportImg} alt="Language Support" />
            <h3>Language Support</h3>
            <p>Choose from multiple languages for a personalized experience.</p>
          </div>
          <div className="feature-item">
            <img src={accessibilityImg} alt="Accessibility" />
            <h3>Accessibility</h3>
            <p>Designed with accessibility in mind for all users.</p>
          </div>
          <div className="feature-item">
            <img src={darkModeImg} alt="Dark and High Contrast Modes" />
            <h3>Dark Mode</h3>
            <p>Customize your viewing experience with dark mode.</p>
          </div>
          <div className="feature-item">
            <img src={<img src={voiceAssistanceImg} alt="Voice Assistance" />} alt="Voice Assistance" />
            <h3>Voice Assistance</h3>
            <p>Hear your tasks read out loud with our text-to-speech feature.</p>
          </div>
          <div className="feature-item">
            <img src={timezoneSupportImg} alt="Timezone Support" />
            <h3>Timezone Support</h3>
            <p>Stay on top of deadlines with timezone-aware reminders.</p>
          </div>
        </div>
      </section>

      <div className="home-actions">
      <Link to="/todolist">
        <button className="home-button" onClick={() => alert('Redirecting to Create a Task..')}>
          Get Started
        </button>
      </Link>
        
      </div>

      <footer className="home-footer">
        <p>Powered by Your TODO List App</p>
      </footer>
    </div>
  );
}

export default Home;
