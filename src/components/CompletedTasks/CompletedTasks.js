import React from 'react';
import './CompletedTasks.css';

const CompletedTasks = ({ todos, toggleTodo, editTodo, deleteTodo, speakTodo, currentLang }) => {
  return (
    <div>
      <h2>{currentLang.completedHeader}</h2>
      <ul>
        {todos.filter(todo => todo.completed).map((todo, index) => (
          <li key={index}>
            <span>{todo.text}</span>
            <button onClick={() => toggleTodo(index)}>✗</button>
            <button onClick={() => editTodo(index)}>{currentLang.editButton}</button>
            <button onClick={() => deleteTodo(index)}>{currentLang.deleteButton}</button>
            <button onClick={() => speakTodo(todo)}>🔊</button>
            <div className="timestamp">
              {currentLang.createdAt} {todo.createdAt.toLocaleString()} <br />
              {currentLang.completedAt} {todo.completedAt ? todo.completedAt.toLocaleString() : 'N/A'}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTasks;
