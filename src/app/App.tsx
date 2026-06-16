import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Timeline } from './components/Timeline';
import { Encyclopedia } from './components/Encyclopedia';

export default function App() {
  {/* MARKER-MAKE-KIT-INVOKED */}
  const [activeSection, setActiveSection] = useState('Home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      <div className="ml-64">
        <Header activeSection={activeSection} onSectionChange={setActiveSection} />

        <main className="pt-14">
          <div className="max-w-5xl mx-auto px-8 py-10">

            {/* Hero */}
            <div className="mb-10 pb-8 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl text-gray-900 mb-2">Topography Encyclopedia</h1>
                  <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
                    A comprehensive reference for Earth's surface features, mapping techniques, and the
                    science of terrain analysis. Explore the history, terminology, and modern methods
                    of topographic study.
                  </p>
                </div>
                <div className="shrink-0 ml-8 flex gap-3">
                  <div className="text-center px-4 py-3 bg-white border border-gray-200 rounded-lg">
                    <div className="text-xl text-gray-900">12</div>
                    <div className="text-xs text-gray-500 mt-0.5">Terms</div>
                  </div>
                  <div className="text-center px-4 py-3 bg-white border border-gray-200 rounded-lg">
                    <div className="text-xl text-gray-900">7</div>
                    <div className="text-xs text-gray-500 mt-0.5">Eras</div>
                  </div>
                  <div className="text-center px-4 py-3 bg-white border border-gray-200 rounded-lg">
                    <div className="text-xl text-gray-900">5000+</div>
                    <div className="text-xs text-gray-500 mt-0.5">Years</div>
                  </div>
                </div>
              </div>
            </div>

            {/* History / Timeline section */}
            <Timeline />

            {/* Divider */}
            <div className="my-10 border-t border-gray-200" />

            {/* Encyclopedia section */}
            <Encyclopedia />

          </div>
        </main>
      </div>
    </div>
  );
}
