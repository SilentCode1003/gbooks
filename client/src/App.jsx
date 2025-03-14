import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';
import MainContent from './components/main';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOverlayClick = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100 relative">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {isSidebarOpen && isMobile && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={handleOverlayClick}
          ></div>
        )}

        {/* Main Layout */}
        <div className="flex-1 flex flex-col transition-all w-100 overflow-auto duration-300">
          {/* Header */}
          <Header toggleSidebar={toggleSidebar} />

          {/* Page Content */}
          <MainContent />
        </div>
      </div>
    </Router>
  );
}

export default App;
