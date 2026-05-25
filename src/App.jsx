import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import ProfessionalDetails from './components/ProfessionalDetails.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import EditModal from './components/EditModal.jsx';
import BackgroundEffects from './components/BackgroundEffects.jsx';
import { defaultPortfolio } from './data/portfolio.js';

const STORAGE_KEY = 'greeshma_portfolio_data_v5';
const RESUME_FILE = '/Greeshma_Sree_Resume.pdf';

export default function App() {
  const [portfolio, setPortfolio] = useState({
    ...defaultPortfolio,
    resumeFile: RESUME_FILE
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [toast, setToast] = useState('');

  useEffect(() => {
    localStorage.removeItem('greeshma_portfolio_data_v2');
    localStorage.removeItem('greeshma_portfolio_data_v3');
    localStorage.removeItem('greeshma_portfolio_data_v4');

    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        const savedPortfolio = JSON.parse(saved);

        setPortfolio({
          ...defaultPortfolio,
          ...savedPortfolio,
          resumeFile: RESUME_FILE
        });
      } catch {
        localStorage.removeItem(STORAGE_KEY);

        setPortfolio({
          ...defaultPortfolio,
          resumeFile: RESUME_FILE
        });
      }
    } else {
      setPortfolio({
        ...defaultPortfolio,
        resumeFile: RESUME_FILE
      });
    }
  }, []);

  const totalSkills = useMemo(
    () =>
      Object.values(portfolio.skills).reduce(
        (count, group) => count + group.length,
        0
      ),
    [portfolio.skills]
  );

  function savePortfolio(nextPortfolio) {
    const updatedPortfolio = {
      ...nextPortfolio,
      resumeFile: RESUME_FILE
    };

    setPortfolio(updatedPortfolio);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPortfolio));

    setToast('Portfolio details updated.');
    setTimeout(() => setToast(''), 2800);
  }

  function resetPortfolio() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('greeshma_portfolio_data_v2');
    localStorage.removeItem('greeshma_portfolio_data_v3');
    localStorage.removeItem('greeshma_portfolio_data_v4');

    setPortfolio({
      ...defaultPortfolio,
      resumeFile: RESUME_FILE
    });

    setToast('Portfolio reset to latest default content.');
    setTimeout(() => setToast(''), 2800);
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-night text-slate-100">
      <BackgroundEffects />

      <Navbar portfolio={portfolio} onEdit={() => setIsEditorOpen(true)} />

      <main className="relative z-10">
        <Hero portfolio={portfolio} totalSkills={totalSkills} />
        <About portfolio={portfolio} />
        <Skills portfolio={portfolio} />
        <ProfessionalDetails portfolio={portfolio} />
        <Projects portfolio={portfolio} />
        <Education portfolio={portfolio} />
        <Contact portfolio={portfolio} />
      </main>

      <Footer portfolio={portfolio} />

      <EditModal
        open={isEditorOpen}
        portfolio={portfolio}
        onClose={() => setIsEditorOpen(false)}
        onSave={savePortfolio}
        onReset={resetPortfolio}
      />

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white shadow-glow backdrop-blur-xl">
          {toast}
        </div>
      )}
    </div>
  );
}