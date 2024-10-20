import React, { useState } from 'react';
import './TodoList.css';
import Navbar from '../Navbar/Navbar';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [fontSize, setFontSize] = useState(16); // Default font size
  const [contrastMode, setContrastMode] = useState(false); // High contrast
  const [darkMode, setDarkMode] = useState(false); // Dark/Light Mode
  const [language, setLanguage] = useState('en'); // Language selection
  const [editingIndex, setEditingIndex] = useState(-1); // Index for editing todo
  const [isOpen, setIsOpen] = useState(false); // Navbar open/close state

  // Translations for different languages
  // Translations for different languages
const translations = {
  en: {
    title: 'TODO List',
    addTask: 'Add a task',
    addButton: 'Add',
    highContrast: 'High Contrast',
    normalContrast: 'Normal Contrast',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    editButton: 'Edit',
    deleteButton: 'Delete',
    completedHeader: 'Completed Tasks',
    pendingHeader: 'Pending Tasks',
    createdAt: 'Created at:',
    completedAt: 'Completed at:',
  },
  hi: {
    title: 'टूडू सूची',
    addTask: 'एक कार्य जोड़ें',
    addButton: 'जोड़ें',
    highContrast: 'उच्च विपरीत',
    normalContrast: 'सामान्य विपरीत',
    lightMode: 'हल्का मोड',
    darkMode: 'अंधेरा मोड',
    editButton: 'संपादित करें',
    deleteButton: 'हटाएं',
    completedHeader: 'पूर्ण कार्य',
    pendingHeader: 'लंबित कार्य',
    createdAt: 'बनाया गया:',
    completedAt: 'पूर्ण किया गया:',
  },
  ta: {
    title: 'செயல்பட்ட பட்டியல்',
    addTask: 'ஒரு பணியைச் சேர்க்கவும்',
    addButton: 'சேர்க்கவும்',
    highContrast: 'உயர் மாறுபாடு',
    normalContrast: 'சாதாரண மாறுபாடு',
    lightMode: 'வெளிச்ச முறையில்',
    darkMode: 'கரும்பு முறை',
    editButton: 'திருத்தவும்',
    deleteButton: 'அழிக்கவும்',
    completedHeader: 'முடிக்கப்பட்ட பணிகள்',
    pendingHeader: 'நிலுவையில் உள்ள பணிகள்',
    createdAt: 'உருவாக்கப்பட்டது:',
    completedAt: 'முடிக்கப்பட்டது:',
  },
  te: {
    title: 'పని లిస్ట్',
    addTask: 'ఒక పని జోడించండి',
    addButton: 'జోడించండి',
    highContrast: 'ఉన్నత విరుద్ధత',
    normalContrast: 'సాధారణ విరుద్ధత',
    lightMode: 'ఉపోద్ఘాత మోడ్',
    darkMode: 'అంధకారం మోడ్',
    editButton: 'సవరించండి',
    deleteButton: 'తొలగించండి',
    completedHeader: 'పూర్తి పనులు',
    pendingHeader: 'ప్రయోజనాలు',
    createdAt: 'సృష్టించబడింది:',
    completedAt: 'పూర్తి చేయబడింది:',
  },
  ml: {
    title: 'ടുഡു ലിസ്റ്റ്',
    addTask: 'ഒരു tarea ചേർക്കുക',
    addButton: 'ചേർക്കുക',
    highContrast: 'ഉയർന്ന ഘടകങ്ങൾ',
    normalContrast: 'സാധാരണ ഘടകങ്ങൾ',
    lightMode: 'ലഘു മോഡ്',
    darkMode: 'അന്ധമായ മോഡ്',
    editButton: 'തിരുത്തുക',
    deleteButton: 'കാൻസലുചെയ്യുക',
    completedHeader: 'പൂർത്തിയാക്കിയ പ്രവർത്തനങ്ങൾ',
    pendingHeader: 'മുൻകൂർ പ്രവർത്തനങ്ങൾ',
    createdAt: 'സൃഷ്ടിച്ചത്:',
    completedAt: 'പൂർത്തിയായി:',
  },
  kn: {
    title: 'ಟುಡೊ ಪಟ್ಟಿಯನ್ನುಟಿ',
    addTask: 'ಒಂದು ಕಾರ್ಯ ಸೇರಿಸಿ',
    addButton: 'ಸೇರಿಸಿ',
    highContrast: 'ಹೈ ಕಾನ್ಟ್ರಾಸ್ಟ್',
    normalContrast: 'ಸಾಮಾನ್ಯ ಕಾನ್ಟ್ರಾಸ್ಟ್',
    lightMode: 'ಬೆಳಕು ಮೋಡ್',
    darkMode: 'ಕಪ್ಪು ಮೋಡ್',
    editButton: 'ತಿದ್ದುಪು ಮಾಡಿ',
    deleteButton: 'ಅಳಿಸಿ',
    completedHeader: 'ಪೂರಿತ ಕಾರ್ಯಗಳು',
    pendingHeader: 'ಬಾಕಿ ಕಾರ್ಯಗಳು',
    createdAt: 'ಸೃಷ್ಠಿಸಲಾಗಿದೆ:',
    completedAt: 'ಪೂರಿತಗೊಂಡಿತು:',
  },
  mr: {
    title: 'कार्य सूची',
    addTask: 'एक कार्य जोडा',
    addButton: 'जोडा',
    highContrast: 'उच्च विरोधाभास',
    normalContrast: 'सामान्य विरोधाभास',
    lightMode: 'प्रकाश मोड',
    darkMode: 'अंधाऱ्या मोड',
    editButton: 'संपादित करा',
    deleteButton: 'काढा',
    completedHeader: 'पूर्ण कार्य',
    pendingHeader: 'प्रलंबित कार्य',
    createdAt: 'तयार केले:',
    completedAt: 'पूर्ण झाले:',
  },
  bn: {
    title: 'TODO তালিকা',
    addTask: 'একটি কাজ যোগ করুন',
    addButton: 'যোগ করুন',
    highContrast: 'উচ্চ বৈসাদৃশ্য',
    normalContrast: 'সাধারণ বৈসাদৃশ্য',
    lightMode: 'হালকা মোড',
    darkMode: 'অন্ধকার মোড',
    editButton: 'সম্পাদনা করুন',
    deleteButton: 'মুছুন',
    completedHeader: 'সম্পন্ন কাজ',
    pendingHeader: 'অপেক্ষমান কাজ',
    createdAt: 'তৈরি হয়েছে:',
    completedAt: 'সম্পন্ন হয়েছে:',
  },
};

  // Add a new Todo item
  const addTodo = () => {
    if (newTodo.trim()) {
      const newEntry = {
        text: newTodo,
        completed: false,
        createdAt: new Date(),
        completedAt: null,
      };
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
    if (!updatedTodos[index].completed) {
      updatedTodos[index].completedAt = null; // Reset completedAt if toggled back to incomplete
    } else {
      updatedTodos[index].completedAt = new Date(); // Set completedAt timestamp
    }
    setTodos(updatedTodos);
  };

  // Font size adjustments
  const increaseFontSize = () => setFontSize(fontSize + 2);
  const decreaseFontSize = () => setFontSize(fontSize > 12 ? fontSize - 2 : 12);

  // Toggle dark and contrast modes
  const toggleContrast = () => setContrastMode(!contrastMode);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Toggle navbar visibility
  const toggleNavbar = () => setIsOpen(!isOpen);

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

  const currentLang = translations[language];

  return (
    <div
      className={`app ${darkMode ? 'dark' : ''} ${contrastMode ? 'high-contrast' : ''}`}
      style={{ fontSize: `${fontSize}px` }}
    >
      {/* Navbar Button */}
      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰ {/* Icon for the navbar toggle */}
      </button>

      {/* Navbar Component */}
      <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar} />
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
            <option value="hi">हिन्दी</option>
            <option value="ta">தமிழ்</option>
            <option value="te">తెలుగు</option>
            <option value="ml">മലയാളം</option>
            <option value="kn">ಕನ್ನಡ</option>
            <option value="mr">मराठी</option>
            <option value="bn">বাংলা</option>
          </select>
        </div>
      </header>

      <main>
        <input
          type="text"
          placeholder={currentLang.addTask}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => (e.key === 'Enter' ? (editingIndex >= 0 ? updateTodo() : addTodo()) : null)}
        />
        <button onClick={editingIndex >= 0 ? updateTodo : addTodo}>
          {editingIndex >= 0 ? currentLang.editButton : currentLang.addButton}
        </button>

        <div className="todo-container">
          <div className="pending-tasks">
            <h2>{currentLang.pendingHeader}</h2>
            <ul>
              {todos.filter((todo) => !todo.completed).map((todo, index) => (
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

          <div className="completed-tasks">
            <h2>{currentLang.completedHeader}</h2>
            <ul>
              {todos.filter((todo) => todo.completed).map((todo, index) => (
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
        </div>
      </main>
    </div>
  );
}

export default TodoList;