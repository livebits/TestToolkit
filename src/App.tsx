import React from 'react';
import AppRoutes from './routes';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
