import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Timeline } from './components/Timeline';
import { TermsGrid } from './components/TermsGrid';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <Header />
      
      <main className="ml-64 pt-16">
        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl text-gray-900 mb-4">
              Topography Encyclopedia
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              A comprehensive resource for understanding Earth's surface features, mapping techniques, 
              and the science of terrain analysis. Explore the history, terminology, and modern methods 
              of topographic study.
            </p>
          </div>

          {/* Timeline Section */}
          <Timeline />

          {/* Divider */}
          <div className="my-16 border-t border-gray-200" />

          {/* Terms Grid Section */}
          <TermsGrid />
        </div>
      </main>
    </div>
  );
}
