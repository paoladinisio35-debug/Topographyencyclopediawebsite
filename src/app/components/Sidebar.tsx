import { Mountain, Map, Compass, Layers, BookOpen, History, Home, ChevronRight } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const primaryNav = [
  { icon: Home, label: 'Home', section: 'Home' },
  { icon: BookOpen, label: 'Encyclopedia', section: 'Encyclopedia' },
  { icon: History, label: 'History', section: 'History' },
  { icon: Map, label: 'Maps', section: 'Maps' },
];

const secondaryNav = [
  { icon: Layers, label: 'Elevation Models', section: '' },
  { icon: Compass, label: 'Surveying Methods', section: '' },
  { icon: Mountain, label: 'Landforms', section: '' },
];

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0 overflow-y-auto z-30 flex flex-col">
      {/* Logo */}
      <div className="px-5 py-4 border-b border-gray-200 flex items-center gap-2.5">
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
          <Mountain className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="text-sm text-gray-900 leading-tight">Topography</div>
          <div className="text-xs text-gray-500 leading-tight">Encyclopedia</div>
        </div>
      </div>

      {/* Primary navigation */}
      <div className="px-3 py-4">
        <p className="px-2 mb-2 text-xs text-gray-400 uppercase tracking-widest">Main</p>
        <nav className="space-y-0.5">
          {primaryNav.map(({ icon: Icon, label, section }) => (
            <button
              key={label}
              onClick={() => section && onSectionChange(section)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded text-sm transition-colors ${
                activeSection === section && section
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{label}</span>
              {activeSection === section && section && (
                <ChevronRight className="w-3 h-3 ml-auto text-blue-500" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Secondary navigation */}
      <div className="px-3 py-4 border-t border-gray-100">
        <p className="px-2 mb-2 text-xs text-gray-400 uppercase tracking-widest">Topics</p>
        <nav className="space-y-0.5">
          {secondaryNav.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="w-full flex items-center gap-3 px-3 py-2 rounded text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Footer links */}
      <div className="mt-auto px-3 py-4 border-t border-gray-100">
        {['About', 'Contribute', 'References'].map((link) => (
          <button
            key={link}
            className="w-full text-left px-3 py-1.5 text-xs text-gray-500 hover:text-gray-800 rounded hover:bg-gray-50 transition-colors"
          >
            {link}
          </button>
        ))}
      </div>
    </aside>
  );
}
