import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Problem from './pages/Problem';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem/:id" element={<Problem />} />
      </Routes>
    </Router>
  );
}