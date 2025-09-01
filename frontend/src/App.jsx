import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './pages/Login';
import List from './pages/List';
import New from './pages/New';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      
        <main className="main-content">
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new" element={<New />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
