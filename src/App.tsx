import React, { useState, useRef, useEffect } from 'react';
import {
  Copy,
  Check,
  Code,
  BookOpen,
  ExternalLink,
  Menu,
  X,
} from 'lucide-react';
import { categories } from './components/categoria.tsx';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState<string>('react');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Scroll to active category
  useEffect(() => {
    const scrollToCategory = () => {
      const container = navRef.current;
      const activeButton = container?.querySelector(
        `[data-category="${activeCategory}"]`,
      );

      if (container && activeButton) {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        const scrollOffset = buttonRect.left - containerRect.left;

        container.scrollTo({
          left: container.scrollLeft + scrollOffset - 24, // 24px padding
          behavior: 'smooth',
        });
      }
    };

    scrollToCategory();
  }, [activeCategory]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (navRef.current?.offsetLeft || 0));
    setScrollLeft(navRef.current?.scrollLeft || 0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (navRef.current?.offsetLeft || 0));
    setScrollLeft(navRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (navRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (navRef.current) {
      navRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (navRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (navRef.current) {
      navRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const navElement = navRef.current;
    if (navElement) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUpOrLeave);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUpOrLeave);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUpOrLeave);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUpOrLeave);
    };
  }, [isDragging, startX, scrollLeft, handleMouseMove, handleTouchMove]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.getElementById('categoryModal');
      if (modal && !modal.contains(event.target as Node) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Function to copy code to clipboard
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Get the active category
  const currentCategory =
    categories.find((cat) => cat.id === activeCategory) || categories[0];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 via-blue-800 to-cyan-900 py-8 px-4 shadow-[0_0_15px_rgba(0,255,255,0.3)] relative">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl md:text-4xl font-bold flex items-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              <Code className="mr-2 text-cyan-400" size={32} />
              CodeSnippets
            </h1>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors border border-cyan-800 text-cyan-400"
              aria-label="Abrir menu"
            >
              <Menu size={24} />
            </button>
          </div>
          <p className="mt-2 text-cyan-100 max-w-2xl">
            Uma coleção de snippets de código, exemplos e recursos para várias
            linguagens de programação e frameworks.
          </p>
        </div>
      </header>

      {/* Categories Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div
            id="categoryModal"
            className="w-full max-w-md bg-gray-900 h-full overflow-y-auto border-l border-cyan-800 shadow-[0_0_20px_rgba(0,255,255,0.2)] animate-slide-left"
          >
            <div className="p-4 border-b border-gray-800 flex justify-between items-center">
              <h2 className="text-xl font-bold text-cyan-400">Categorias</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4 space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full p-4 rounded-lg flex items-center transition-all ${
                    activeCategory === category.id
                      ? 'bg-purple-900 text-cyan-300 shadow-[0_0_10px_rgba(0,255,255,0.2)]'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.icon}
                  <span className="ml-3">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-4">
        {/* Category Navigation with horizontal scroll */}
        <div className="category-nav-container p-4">
          <div
            className="overflow-x-auto scrollbar-thin"
            ref={navRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onMouseLeave={handleMouseUpOrLeave}
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <ul className="flex space-x-2 min-w-max px-6 py-4">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    data-category={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 rounded-md transition-all border whitespace-nowrap ${
                      activeCategory === category.id
                        ? 'bg-purple-900 py-4 text-cyan-300 border-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.2)]'
                        : 'bg-gray-800 py-4 text-gray-300 border-gray-700 hover:bg-gray-700'
                    }`}
                  >
                    <span className="flex items-center">
                      {category.icon}
                      <span className="ml-2">{category.name}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Category Header */}
        <div className="bg-gray-800 rounded-lg shadow-[0_0_10px_rgba(128,0,255,0.2)] p-6 mb-8 border border-purple-900">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-cyan-300 flex items-center">
                {currentCategory.icon}
                <span className="ml-2">{currentCategory.name}</span>
              </h2>
              <p className="mt-2 text-gray-300">
                {currentCategory.description}
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <a
                href={currentCategory.documentation}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-cyan-400 hover:text-cyan-300"
              >
                <BookOpen size={18} className="mr-1" />
                Documentação
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>

          {/* Tutorials */}
          <div className="mt-4">
            <h3 className="font-semibold text-purple-300">
              Recursos de Aprendizagem:
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {currentCategory.tutorials.map((tutorial, index) => (
                <a
                  key={index}
                  href={tutorial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-full text-sm text-cyan-300 border border-purple-800"
                >
                  {tutorial.title}
                  <ExternalLink size={12} className="ml-1" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Code Snippets */}
        <div className="space-y-6">
          {currentCategory.snippets.map((snippet) => (
            <div
              key={snippet.id}
              className="bg-gray-800 rounded-lg shadow-[0_0_10px_rgba(0,128,255,0.15)] overflow-hidden border border-blue-900"
            >
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-cyan-300">
                  {snippet.title}
                </h3>
                <p className="mt-1 text-gray-300">{snippet.description}</p>
              </div>
              <div className="relative">
                <div className="absolute top-2 right-2 z-10">
                  <button
                    onClick={() => copyToClipboard(snippet.code, snippet.id)}
                    className="p-2 bg-gray-900 bg-opacity-70 rounded text-cyan-400 hover:bg-opacity-90 transition-all border border-cyan-800"
                    aria-label="Copiar código"
                  >
                    {copiedId === snippet.id ? (
                      <Check size={18} />
                    ) : (
                      <Copy size={18} />
                    )}
                  </button>
                </div>
                <pre className="p-4 bg-gray-900 text-cyan-100 overflow-x-auto border-t border-gray-700">
                  <code>{snippet.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4 mt-12 border-t border-purple-900">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold flex items-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                <Code className="mr-2 text-cyan-400" size={20} />
                CodeSnippets
              </h2>
              <p className="text-gray-400 mt-1">
                Uma coleção de snippets de código e recursos úteis
              </p>
            </div>
            <div>
              <p className="text-gray-400">
                &copy; 2025 CodeSnippets. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
