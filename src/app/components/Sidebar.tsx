import { Mountain, Map, Compass, Layers, BookOpen, History, Home } from 'lucide-react';

export function Sidebar() {
  const navigationItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: BookOpen, label: 'Encyclopedia', active: false },
    { icon: History, label: 'Timeline', active: false },
    { icon: Map, label: 'Topographic Maps', active: false },
    { icon: Layers, label: 'Elevation', active: false },
    { icon: Compass, label: 'Surveying', active: false },
    { icon: Mountain, label: 'Landforms', active: false },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <Mountain className="w-8 h-8 text-teal-600" />
          <h1 className="text-xl text-gray-900">Topography Encyclopedia</h1>
        </div>
        
        <nav className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-md transition-colors ${
                  item.active
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3 px-4">
            Quick Links
          </h3>
          <div className="space-y-1">
            <button className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
              About
            </button>
            <button className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
              Contribute
            </button>
            <button className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
              References
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
