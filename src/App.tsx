import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WalletPage from './pages/WalletPage';
import DashboardPage from './pages/DashboardPage';
import MiningPage from './pages/MiningPage';
import RewardsPage from './pages/RewardsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0e1a]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/mining" element={<MiningPage />} />
          <Route path="/rewards" element={<RewardsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
