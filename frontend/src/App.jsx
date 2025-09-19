import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './pages/Login';
import List from './pages/List';
import New from './pages/New';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Item from './pages/Item';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation().pathname
  return (
    <div className="App">

      <main className="main-content">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/item" element={<Item />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/new" element={<New />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
          </Route>


        </Routes>
      </main>
      {location != '/login' && <Footer />}

    </div>
  )
}

export default App;
