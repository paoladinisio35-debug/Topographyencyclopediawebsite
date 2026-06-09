import { ImageWithFallback } from './figma/ImageWithFallback';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '3000 BCE',
    title: 'Ancient Egyptian Surveying',
    description: 'Early Egyptians developed basic topographic surveying techniques to measure and restore land boundaries after Nile floods.',
    image: 'https://images.unsplash.com/photo-1543191878-2baa4ff8a570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwdG9wb2dyYXBoeSUyMG1hcHxlbnwxfHx8fDE3ODEwMzY0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    year: '1500s',
    title: 'Development of Surveying Instruments',
    description: 'The theodolite and other precision instruments revolutionized topographic mapping and land surveying.',
    image: 'https://images.unsplash.com/photo-1777887050296-829020618bf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwc3VydmV5aW5nJTIwZXF1aXBtZW50fGVufDF8fHx8MTc4MTAzNjQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    year: '1800s',
    title: 'Contour Line Mapping',
    description: 'Introduction of contour lines became standard practice for representing three-dimensional terrain on two-dimensional maps.',
    image: 'https://images.unsplash.com/photo-1736117704452-46670dd0c81f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250b3VyJTIwbGluZXMlMjBtYXB8ZW58MXx8fHwxNzgxMDM2NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    year: '1960s',
    title: 'Aerial Photography',
    description: 'Aerial photography and photogrammetry transformed topographic mapping, allowing for rapid and accurate terrain documentation.',
    image: 'https://images.unsplash.com/photo-1517256985756-924657c74fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHRlcnJhaW4lMjBhZXJpYWx8ZW58MXx8fHwxNzgxMDM2NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    year: '2000s',
    title: 'Digital Elevation Models',
    description: 'Modern satellite technology and LiDAR systems enable creation of highly accurate digital elevation models for global terrain analysis.',
    image: 'https://images.unsplash.com/photo-1644158767445-79390e879319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZWxldmF0aW9uJTIwbW9kZWx8ZW58MXx8fHwxNzgxMDM2NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Timeline() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl text-gray-900 mb-6">Historical Timeline</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-blue-400 -translate-x-1/2" />
        
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div
              key={event.year}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="inline-block bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <div className="text-sm text-teal-600 mb-2">{event.year}</div>
                    <h3 className="text-lg text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-teal-400 to-blue-400 border-4 border-white shadow-md" />
              </div>
              
              <div className="flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
