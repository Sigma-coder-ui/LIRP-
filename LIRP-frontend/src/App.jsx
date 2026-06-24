import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import ProjectsPage from './pages/ProjectsPage';
import CareerSupportPage from './pages/CareerSupportPage';
import WorkshopsPage from './pages/WorkshopsPage';
import RoadmapPage from './pages/RoadmapPage';
import AboutPage from './pages/AboutPage';
import ApplyPage from './pages/ApplyPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <ScrollToTop />
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <AppContent />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/career" element={<CareerSupportPage />} />
            <Route path="/workshops" element={<WorkshopsPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </HashRouter>
  );
}
