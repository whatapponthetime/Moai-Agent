import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import BrowseAgents from './pages/BrowseAgents';
import BrowseSkills from './pages/BrowseSkills';
import Dashboard from './pages/Dashboard';
import Documentation from './pages/Documentation';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url(/moai-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Sidebar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <main className="flex-1 ml-64 p-8 overflow-auto relative z-10">
        <Routes>
          <Route path="/" element={<Dashboard onNavigate={() => { }} />} />
          <Route path="/agents" element={<BrowseAgents searchQuery={searchQuery} />} />
          <Route path="/skills" element={<BrowseSkills searchQuery={searchQuery} />} />
          <Route path="/docs/*" element={<Documentation />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
