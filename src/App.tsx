import React, { useState, useRef, useEffect } from 'react';
import { Copy, Check, Code, BookOpen, ExternalLink, Menu, X, Search, Sun, Moon } from 'lucide-react';
import { categories } from './components/categoria.tsx';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState<string>('react');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const navRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Theme effect
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkTheme);
    document.documentElement.classList.toggle('light', !isDarkTheme);
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  // Scroll to active category
  useEffect(() => {
    const scrollToCategory = () => {
      const container = navRef.current;
      const activeButton = container?.querySelector(`[data-category="${activeCategory}"]`);
      
      if (container && activeButton) {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        const scrollOffset = buttonRect.left - containerRect.left;
        
        container.scrollTo({
          left: container.scrollLeft + scrollOffset - 24,
          behavior: 'smooth'
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (navRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (navRef.current) {
      navRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0];

  // Filter snippets based on search query
  const filteredSnippets = currentCategory.snippets.filter(snippet => {
    const searchLower = searchQuery.toLowerCase();
    return (
      snippet.title.toLowerCase().includes(searchLower) ||
      snippet.description.toLowerCase().includes(searchLower)
    );
  });

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkTheme ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`transition-colors duration-300 ${
        isDarkTheme 
          ? 'bg-gradient-to-r from-purple-900 via-blue-800 to-cyan-900 shadow-[0_0_15px_rgba(0,255,255,0.3)]'
          : 'bg-gradient-to-r from-purple-100 via-blue-100 to-cyan-100 shadow-lg'
      } py-8 px-4 relative`}>
        <div className="container mx-auto">
          <div className="flex flex-row gap-4 justify-between items-center">
            <h1 className="text-2xl md:text-4xl font-bold flex items-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              <Code className="mr-2 text-cyan-400" size={32} />
              CodeSnippets
            </h1>
            <div className="flex items-center justify-end gap-4 w-full md:w-auto">
              
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDarkTheme
                    ? 'bg-gray-800 hover:bg-gray-700 text-cyan-400 border-cyan-800'
                    : 'bg-white hover:bg-gray-100 text-purple-600 border-purple-200'
                } border`}
                aria-label="Alternar tema"
              >
                <div className="relative w-6 h-6">
                  <Sun
                    size={24}
                    className={`absolute inset-0 transform transition-transform duration-300 ${
                      isDarkTheme ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                    }`}
                  />
                  <Moon
                    size={24}
                    className={`absolute inset-0 transform transition-transform duration-300 ${
                      isDarkTheme ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                    }`}
                  />
                </div>
              </button>
              <button
                onClick={() => setIsMenuOpen(true)}
                className={`p-2 rounded-lg transition-colors border ${
                  isDarkTheme
                    ? 'bg-gray-800 hover:bg-gray-700 border-cyan-800 text-cyan-400'
                    : 'bg-white hover:bg-gray-100 border-purple-200 text-purple-600'
                }`}
                aria-label="Abrir menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
          <p className={`mt-4 max-w-2xl ${isDarkTheme ? 'text-cyan-100' : 'text-gray-600'}`}>
            Uma coleção de snippets de código, exemplos e recursos para várias linguagens de programação e frameworks.
          </p>
        </div>
      </header>

      {/* Categories Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div
            id="categoryModal"
            className={`w-full max-w-md h-full overflow-y-auto border-l shadow-[0_0_20px_rgba(0,255,255,0.2)] animate-slide-left ${
              isDarkTheme
                ? 'bg-gray-900 border-cyan-800'
                : 'bg-white border-purple-200'
            }`}
          >
            <div className={`p-4 border-b flex justify-between items-center ${
              isDarkTheme ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <h2 className={`text-xl font-bold ${
                isDarkTheme ? 'text-cyan-400' : 'text-purple-600'
              }`}>Categorias</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkTheme
                    ? 'hover:bg-gray-800 text-gray-400 hover:text-cyan-400'
                    : 'hover:bg-gray-100 text-gray-500 hover:text-purple-600'
                }`}
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
                  className={`w-full p-4 rounded-lg flex items-center transition-all  ${
                    activeCategory === category.id
                      ? isDarkTheme
                        ? 'bg-purple-900 text-cyan-300 shadow-[0_0_10px_rgba(0,255,255,0.2)]'
                        : 'bg-purple-100 text-purple-700 shadow-md'
                      : isDarkTheme
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
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

      <div className="container mx-auto px-4 py-8">
        {/* Category Navigation with horizontal scroll */}
        <div className={`category-nav-container ${
          isDarkTheme ? 'border-cyan-800' : 'border-purple-200 bg-white'
        }`}>
  <div 
    className="overflow-x-auto ml-2 scrollbar-thin" 
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
                    className={`px-6 py-3 rounded-md transition-all border whitespace-nowrap ${
                      activeCategory === category.id
                        ? isDarkTheme
                          ? 'bg-purple-900 text-cyan-300 border-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.2)]'
                          : 'bg-purple-100 text-purple-700 border-purple-300 shadow-md'
                        : isDarkTheme
                          ? 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
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
        <div className={`rounded-lg p-6 mb-8 border transition-colors duration-300 ${
          isDarkTheme
            ? 'bg-gray-800 shadow-[0_0_10px_rgba(128,0,255,0.2)] border-purple-900'
            : 'bg-white shadow-lg border-purple-200'
        }`}>
          <div className="flex items-start justify-between">
            <div>
              <h2 className={`text-2xl font-bold flex items-center ${
                isDarkTheme ? 'text-cyan-300' : 'text-purple-600'
              }`}>
                {currentCategory.icon}
                <span className="ml-2">{currentCategory.name}</span>
              </h2>
              <p className={`mt-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                {currentCategory.description}
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <a
                href={currentCategory.documentation}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center hover:underline ${
                  isDarkTheme ? 'text-cyan-400 hover:text-cyan-300' : 'text-purple-600 hover:text-purple-500'
                }`}
              >
                <BookOpen size={18} className="mr-1" />
                Documentação
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>

          {/* Tutorials */}
          <div className="mt-4">
            <h3 className={`font-semibold ${
              isDarkTheme ? 'text-purple-300' : 'text-purple-600'
            }`}>Recursos de Aprendizagem:</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {currentCategory.tutorials.map((tutorial, index) => (
                <a
                  key={index}
                  href={tutorial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm border transition-colors ${
                    isDarkTheme
                      ? 'bg-gray-700 hover:bg-gray-600 text-cyan-300 border-purple-800'
                      : 'bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200'
                  }`}
                >
                  {tutorial.title}
                  <ExternalLink size={12} className="ml-1" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="relative flex-1 mb-5 md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className={`h-5 w-5 ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`} />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar snippets..."
                  className={`w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                    isDarkTheme
                      ? 'bg-gray-800 bg-opacity-50 border-cyan-800 focus:ring-cyan-600 text-gray-100 placeholder-gray-400'
                      : 'bg-white border-purple-200 focus:ring-purple-400 text-gray-900 placeholder-gray-500'
                  } border`}
                />
              </div>

        {/* Code Snippets */}
        <div className="space-y-6">
          {filteredSnippets.length > 0 ? (
            filteredSnippets.map((snippet) => (
              <div key={snippet.id} className={`rounded-lg overflow-hidden border transition-colors duration-300 ${
                isDarkTheme
                  ? 'bg-gray-800 shadow-[0_0_10px_rgba(0,128,255,0.15)] border-blue-900'
                  : 'bg-white shadow-lg border-purple-200'
              }`}>
                <div className={`p-4 border-b ${
                  isDarkTheme ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <h3 className={`text-xl font-semibold ${
                    isDarkTheme ? 'text-cyan-300' : 'text-purple-600'
                  }`}>{snippet.title}</h3>
                  <p className={`mt-1 ${
                    isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                  }`}>{snippet.description}</p>
                </div>
                <div className="relative">
                  <div className="absolute top-2 right-2 z-10">
                    <button
                      onClick={() => copyToClipboard(snippet.code, snippet.id)}
                      className={`p-2 rounded border transition-all ${
                        isDarkTheme
                          ? 'bg-gray-900 bg-opacity-70 text-cyan-400 hover:bg-opacity-90 border-cyan-800'
                          : 'bg-white text-purple-600 hover:bg-gray-50 border-purple-200'
                      }`}
                      aria-label="Copiar código"
                    >
                      {copiedId === snippet.id ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                  </div>
                  <pre className={`p-4 pt-10 overflow-x-auto border-t ${
                    isDarkTheme
                      ? 'bg-gray-900 text-cyan-100 border-gray-700'
                      : 'bg-gray-50 text-gray-800 border-gray-200'
                  }`}>
                    <code>{snippet.code}</code>
                  </pre>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className={isDarkTheme ? 'text-gray-400' : 'text-gray-500'}>
                Nenhum snippet encontrado para "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className={`py-8 px-4 mt-12 border-t transition-colors duration-300 ${
        isDarkTheme
          ? 'bg-gray-900 text-gray-300 border-purple-900'
          : 'bg-gray-50 text-gray-600 border-purple-200'
      }`}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold flex items-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                <Code className="mr-2 text-cyan-400" size={20} />
                CodeSnippets
              </h2>
              <p className={isDarkTheme ? 'text-gray-400' : 'text-gray-500'}>
                Uma coleção de snippets de código e recursos úteis
              </p>
            </div>
            <div>
              <p className={isDarkTheme ? 'text-gray-400' : 'text-gray-500'}>
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