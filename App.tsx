
import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Builder } from './components/Builder';
import { Library } from './components/Library';
import { Games } from './components/Games';
import { Guides } from './components/Guides';
import { Merch } from './components/Merch';
import { Footer } from './components/Footer';
import { FloatingCube } from './components/FloatingCube';
import { Language } from './types';

const App: React.FC = () => {
  const [page, setPage] = useState('home');
  const [lang, setLang] = useState<Language>('en');

  const renderPage = () => {
    switch(page) {
      case 'home':
        return <Hero lang={lang} onStart={() => setPage('builder')} onExplore={() => setPage('library')} />;
      case 'builder':
        return <Builder lang={lang} />;
      case 'library':
        return <Library lang={lang} />;
      case 'games':
        return <Games lang={lang} />;
      case 'guides':
        return <Guides lang={lang} />;
      case 'merch':
        return <Merch lang={lang} />;
      default:
        return <Hero lang={lang} onStart={() => setPage('builder')} onExplore={() => setPage('library')} />;
    }
  };

  return (
    <div className="bg-background min-h-screen text-primary selection:bg-white selection:text-black">
      <Navigation activePage={page} setActivePage={setPage} lang={lang} setLang={setLang} />
      
      <main className="relative z-10">
        {renderPage()}
      </main>

      <FloatingCube />
      <Footer lang={lang} />
    </div>
  );
};

export default App;
