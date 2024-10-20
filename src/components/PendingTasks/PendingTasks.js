import React from 'react';
import './PendingTasks.css';

const PendingTasks = ({ todos, toggleTodo, editTodo, deleteTodo, speakTodo, currentLang }) => {
  return (
    <div>
      <h2>{currentLang.pendingHeader}</h2>
      <ul>
        {todos.filter(todo => !todo.completed).map((todo, index) => (
          <li key={index}>
            <span>{todo.text}</span>
            <button onClick={() => toggleTodo(index)}>✓</button>
            <button onClick={() => editTodo(index)}>{currentLang.editButton}</button>
            <button onClick={() => deleteTodo(index)}>{currentLang.deleteButton}</button>
            <button onClick={() => speakTodo(todo)}>🔊</button>
            <div className="timestamp">
              {currentLang.createdAt} {todo.createdAt.toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingTasks;
