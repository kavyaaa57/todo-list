import React, { useState, useEffect } from 'react';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [fontSize, setFontSize] = useState(16); // Default font size
  const [contrastMode, setContrastMode] = useState(false); // High contrast
  const [darkMode, setDarkMode] = useState(false); // Dark/Light Mode
  const [language, setLanguage] = useState('en'); // Language selection
  const [editingIndex, setEditingIndex] = useState(-1); // Index for editing todo
  const [timezone, setTimezone] = useState('UTC'); // Default timezone for display

  // Translations for different languages
  const translations = {
    en: { title: 'TODO List', addTask: 'Add a task', addButton: 'Add', highContrast: 'High Contrast', normalContrast: 'Normal Contrast', lightMode: 'Light Mode', darkMode: 'Dark Mode', editButton: 'Edit', deleteButton: 'Delete', completedHeader: 'Completed Tasks', pendingHeader: 'Pending Tasks' },
    hi: { title: 'कार्य सूची', addTask: 'कार्य जोड़ें', addButton: 'जोड़ें', highContrast: 'उच्च कंट्रास्ट', normalContrast: 'सामान्य कंट्रास्ट', lightMode: 'हल्का मोड', darkMode: 'डार्क मोड', editButton: 'संपादित करें', deleteButton: 'हटाएं', completedHeader: 'पूर्ण कार्य', pendingHeader: 'लंबित कार्य' },
    ta: { title: 'செயல்பட்ட பட்டியல்', addTask: 'பணி சேர்க்க', addButton: 'சேர்க்க', highContrast: 'உயர் மாறுபாடு', normalContrast: 'சாதாரண மாறுபாடு', lightMode: 'ஒளிர்ந்த பயன்முறை', darkMode: 'இருண்ட பயன்முறை', editButton: 'தொகு', deleteButton: 'அழி', completedHeader: 'நிறைவு செய்யப்பட்டது', pendingHeader: 'நிலுவையில் உள்ளது' },
    te: { title: 'పని లిస్ట్', addTask: 'పని చేర్చు', addButton: 'చేర్చు', highContrast: 'అధిక కాంతి వ్యత్యాసం', normalContrast: 'సాధారణ కాంతి వ్యత్యాసం', lightMode: 'కాంతి మోడ్', darkMode: 'డార్క్ మోడ్', editButton: 'సంపాదించు', deleteButton: 'తొలగించు', completedHeader: 'పూర్తయిన పనులు', pendingHeader: 'పెండింగ్ పనులు' },
    ml: { title: 'ടുഡു ലിസ്റ്റ്', addTask: 'പണി ചേർക്കുക', addButton: 'ചേർക്കുക', highContrast: 'ഉയർന്ന കോൺട്രാസ്റ്റ്', normalContrast: 'സാധാരണ കോൺട്രാസ്റ്റ്', lightMode: 'ലൈറ്റ് മോഡ്', darkMode: 'ഡാർക്ക് മോഡ്', editButton: 'എഡിറ്റ്', deleteButton: 'ഇല്ലാതാക്കുക', completedHeader: 'പൂർത്തിയായ ജോലികൾ', pendingHeader: 'കാത്തിരിക്കുന്ന ജോലികൾ' },
    kn: { title: 'ಟುಡೊ ಪಟ್ಟಿಯನ್ನು', addTask: 'ಕಾರ್ಯವನ್ನು ಸೇರಿಸಿ', addButton: 'ಸೇರಿಸಿ', highContrast: 'ಹೆಚ್ಚಿನ ವ್ಯತ್ಯಾಸ', normalContrast: 'ಸಾಮಾನ್ಯ ವ್ಯತ್ಯಾಸ', lightMode: 'ಲೈಟ್ ಮೋಡ್', darkMode: 'ಡಾರ್ಕ್ ಮೋಡ್', editButton: 'ತಿದ್ದು', deleteButton: 'ಅಳಿಸು', completedHeader: 'ಪೂರ್ಣಗೊಂಡ ಕಾರ್ಯ', pendingHeader: 'ಬಾಕಿ ಇರುವ ಕಾರ್ಯ' },
    mr: { title: 'कार्य सूची', addTask: 'कार्य जोडा', addButton: 'जोडा', highContrast: 'उच्च कॉन्ट्रास्ट', normalContrast: 'सामान्य कॉन्ट्रास्ट', lightMode: 'लाइट मोड', darkMode: 'डार्क मोड', editButton: 'संपादित करा', deleteButton: 'हटवा', completedHeader: 'पूर्ण कार्य', pendingHeader: 'लंबित कार्य' },
    bn: { title: 'TODO তালিকা', addTask: 'কাজ যোগ করুন', addButton: 'যোগ করুন', highContrast: 'উচ্চ কনট্রাস্ট', normalContrast: 'স্বাভাবিক কনট্রাস্ট', lightMode: 'লাইট মোড', darkMode: 'ডার্ক মোড', editButton: 'সম্পাদন করুন', deleteButton: 'মুছে ফেলুন', completedHeader: 'সম্পন্ন কাজ', pendingHeader: 'অমীমাংসিত কাজ' }
  };

  // Add a new Todo item
  const addTodo = () => {
    if (newTodo.trim()) {
      const newEntry = { text: newTodo, completed: false, timestamp: new Date() };
      setTodos([...todos, newEntry]);
      setNewTodo('');
      setEditingIndex(-1);
    }
  };

  // Edit a Todo item
  const editTodo = (index) => {
    setNewTodo(todos[index].text);
    setEditingIndex(index);
  };

  // Update the Todo item after editing
  const updateTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editingIndex].text = newTodo;
    setTodos(updatedTodos);
    setNewTodo('');
    setEditingIndex(-1);
  };

  // Delete a Todo item
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Toggle todo completion status
  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Font size adjustments
  const increaseFontSize = () => setFontSize(fontSize + 2);
  const decreaseFontSize = () => setFontSize(fontSize > 12 ? fontSize - 2 : 12);

  // Toggle dark and contrast modes
  const toggleContrast = () => setContrastMode(!contrastMode);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Text-to-speech for Todos (based on selected language)
  const speakTodo = (todo) => {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(todo.text);
    utterThis.lang = getLangCode(language); // Set language for speech
    synth.speak(utterThis);
  };

  const getLangCode = (lang) => {
    const langCodes = { en: 'en-US', hi: 'hi-IN', ta: 'ta-IN', te: 'te-IN', ml: 'ml-IN', kn: 'kn-IN', mr: 'mr-IN', bn: 'bn-IN' };
    return langCodes[lang] || 'en-US';
  };

  // Time feature for all time zones
  useEffect(() => {
    const interval = setInterval(() => {
      setTimezone(new Date().toLocaleString('en-US', { timeZone: 'UTC' }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentLang = translations[language];

  return (
    <div
      className={`app ${darkMode ? 'dark' : ''} ${contrastMode ? 'high-contrast' : ''}`}
      style={{ fontSize: `${fontSize}px` }}
    >
      <header>
        <h1>{currentLang.title}</h1>
        <div className="controls">
          <button onClick={increaseFontSize}>A+</button>
          <button onClick={decreaseFontSize}>A-</button>
          <button onClick={toggleContrast}>
            {contrastMode ? currentLang.normalContrast : currentLang.highContrast}
          </button>
          <button onClick={toggleDarkMode}>
            {darkMode ? currentLang.lightMode : currentLang.darkMode}
          </button>
          <select onChange={(e) => setLanguage(e.target.value)} value={language}>
            <option value="en">English</option>
            <option value="hi">हिन्दी (Hindi)</option>
            <option value="ta">தமிழ் (Tamil)</option>
            <option value="te">తెలుగు (Telugu)</option>
            <option value="ml">മലയാളം (Malayalam)</option>
            <option value="kn">ಕನ್ನಡ (Kannada)</option>
            <option value="mr">मराठी (Marathi)</option>
            <option value="bn">বাংলা (Bengali)</option>
          </select>
        </div>
      </header>

      <div className="todo-container">
        <h2>{currentLang.addTask}</h2>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder={currentLang.addTask}
        />
        <button onClick={editingIndex === -1 ? addTodo : updateTodo}>
          {editingIndex === -1 ? currentLang.addButton : currentLang.editButton}
        </button>
      </div>

      <div className="todo-list">
        <h3>{currentLang.pendingHeader}</h3>
        {todos.filter((todo) => !todo.completed).map((todo, index) => (
          <div key={index} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <span>{todo.text}</span>
            <button onClick={() => speakTodo(todo)}>🔊</button>
            <button onClick={() => editTodo(index)}>{currentLang.editButton}</button>
            <button onClick={() => deleteTodo(index)}>{currentLang.deleteButton}</button>
          </div>
        ))}

        <h3>{currentLang.completedHeader}</h3>
        {todos.filter((todo) => todo.completed).map((todo, index) => (
          <div key={index} className="todo-item completed">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <span>{todo.text}</span>
            <button onClick={() => speakTodo(todo)}>🔊</button>
            <button onClick={() => editTodo(index)}>{currentLang.editButton}</button>
            <button onClick={() => deleteTodo(index)}>{currentLang.deleteButton}</button>
          </div>
        ))}
      </div>
      
      <footer>
        <p>Current time in UTC: {timezone}</p>
      </footer>

      

    </div>
  );
}

export default TodoList;
