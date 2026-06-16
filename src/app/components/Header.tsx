import { Search, Mountain } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Header({ activeSection, onSectionChange }: HeaderProps) {
  const navLinks = ['History', 'Encyclopedia', 'Maps'];

  return (
    <header className="h-14 bg-white border-b border-gray-200 fixed top-0 left-64 right-0 z-20 flex items-center px-8 gap-8">
      {/* Search */}
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search encyclopedia…"
          className="w-full pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
        />
      </div>

      {/* Nav links */}
      <nav className="flex items-center gap-1">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => onSectionChange(link)}
            className={`px-4 py-1.5 rounded text-sm transition-colors ${
              activeSection === link
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            {link}
          </button>
        ))}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-3 ml-auto">
        <button className="text-sm text-gray-500 hover:text-gray-800">
          Login
        </button>
        <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
          Contribute
        </button>
      </div>
    </header>
  );
}
