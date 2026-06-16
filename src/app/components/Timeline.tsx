import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X, ExternalLink } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
  detail: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '3000 BCE',
    title: 'Ancient Egyptian Surveying',
    description: 'Early Egyptians developed basic topographic surveying to measure and restore land after Nile floods.',
    detail: 'Egyptian surveyors used ropes with knots at regular intervals (known as "rope-stretchers") and primitive plumb bobs to establish right angles. These techniques laid the foundation for all future land measurement.',
    image: 'https://images.unsplash.com/photo-1543191878-2baa4ff8a570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwdG9wb2dyYXBoeSUyMG1hcHxlbnwxfHx8fDE3ODEwMzY0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    year: '150 CE',
    title: "Ptolemy's Geographia",
    description: 'Claudius Ptolemy compiled the first systematic world atlas, introducing coordinates and map projections.',
    detail: "Ptolemy's 8-volume Geographia introduced latitude and longitude as a coordinate framework, and described map projection methods to represent the curved Earth on a flat surface — revolutionary ideas that endured 1,400 years.",
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwbWFwJTIwd29ybGR8ZW58MXx8fHwxNzgxMDM2NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    year: '1569',
    title: 'Mercator Projection',
    description: 'Gerardus Mercator introduced his famous cylindrical map projection, enabling accurate navigation.',
    detail: 'The Mercator projection preserved angles and shapes locally, making it ideal for nautical navigation. Straight lines on Mercator charts correspond to compass bearings — a breakthrough for the Age of Exploration.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMG1hcHxlbnwxfHx8fDE3ODEwMzY0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    year: '1791',
    title: 'Theodolite & Trigonometric Survey',
    description: 'The Great Trigonometrical Survey of India began, using precision theodolites to map the subcontinent.',
    detail: 'The survey spanned over 70 years, ultimately measuring the heights of Himalayan peaks including Everest. It established triangulation as the gold standard for large-scale topographic surveys worldwide.',
    image: 'https://images.unsplash.com/photo-1777887050296-829020618bf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwc3VydmV5aW5nJTIwZXF1aXBtZW50fGVufDF8fHx8MTc4MTAzNjQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    year: '1850s',
    title: 'Contour Line Mapping',
    description: 'Contour lines became the standard method for depicting three-dimensional terrain on two-dimensional maps.',
    detail: 'Earlier maps used hachure lines (short strokes) to indicate slope, but contour lines offered quantitative precision. Surveyors could now communicate elevation change, slope gradient, and landform type through a single elegant abstraction.',
    image: 'https://images.unsplash.com/photo-1736117704452-46670dd0c81f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250b3VyJTIwbGluZXMlMjBtYXB8ZW58MXx8fHwxNzgxMDM2NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    year: '1960s',
    title: 'Aerial Photogrammetry',
    description: 'Aerial photography and photogrammetry transformed mapping, enabling rapid and accurate terrain documentation.',
    detail: 'Stereo aerial photographs, when viewed through a stereoscope or processed with analytical plotters, revealed precise elevation data. National mapping agencies adopted photogrammetry to produce topographic maps 10× faster than ground surveys.',
    image: 'https://images.unsplash.com/photo-1517256985756-924657c74fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHRlcnJhaW4lMjBhZXJpYWx8ZW58MXx8fHwxNzgxMDM2NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    year: '2000s',
    title: 'Digital Elevation Models',
    description: 'Satellite technology and LiDAR enabled creation of highly accurate global digital elevation models.',
    detail: "NASA's Shuttle Radar Topography Mission (SRTM) produced the first near-global high-resolution DEM in 2000. Today's airborne LiDAR systems can resolve sub-centimeter surface features, revolutionizing flood modeling, archaeology, and autonomous navigation.",
    image: 'https://images.unsplash.com/photo-1644158767445-79390e879319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZWxldmF0aW9uJTIwbW9kZWx8ZW58MXx8fHwxNzgxMDM2NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Timeline() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const selectedEvent = selected !== null ? timelineEvents[selected] : null;

  return (
    <section className="mb-16">
      <div className="mb-6">
        <h2 className="text-xl text-gray-900 mb-1">History of Topographic Mapping</h2>
        <p className="text-sm text-gray-500">Hover a node to preview · click to read the full entry</p>
      </div>

      {/* Horizontal timeline */}
      <div className="relative pb-6 overflow-x-auto">
        {/* Spine */}
        <div className="absolute top-10 left-0 right-0 h-px bg-gray-200" />

        <div className="flex items-start gap-0 min-w-max pr-4">
          {timelineEvents.map((event, index) => {
            const isHovered = hovered === index;
            const isSelected = selected === index;

            return (
              <div
                key={event.year}
                className="relative flex flex-col items-center"
                style={{ width: 140 }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Date label above spine */}
                <div className={`mb-2 text-xs text-center transition-colors ${isSelected ? 'text-blue-600' : 'text-gray-500'}`}>
                  {event.year}
                </div>

                {/* Node dot */}
                <button
                  onClick={() => setSelected(selected === index ? null : index)}
                  className={`relative z-10 w-4 h-4 rounded-full border-2 transition-all duration-150 focus:outline-none ${
                    isSelected
                      ? 'bg-blue-600 border-blue-600 scale-125 shadow-md shadow-blue-200'
                      : isHovered
                      ? 'bg-blue-400 border-blue-400 scale-110'
                      : 'bg-white border-gray-400 hover:border-blue-400'
                  }`}
                  aria-label={`Select ${event.title}`}
                />

                {/* Hover card below spine */}
                {isHovered && !isSelected && (
                  <div className="absolute top-7 mt-4 z-30" style={{ width: 200, left: '50%', transform: 'translateX(-50%)' }}>
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="w-full h-24 object-cover"
                      />
                      <div className="p-2.5">
                        <div className="text-xs text-blue-600 mb-0.5">{event.year}</div>
                        <div className="text-xs text-gray-800 leading-snug">{event.title}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail panel */}
      {selectedEvent && (
        <div className="mt-4 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="flex">
            <ImageWithFallback
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-56 shrink-0 object-cover"
            />
            <div className="p-6 flex-1">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs text-blue-600 uppercase tracking-wide">{selectedEvent.year}</span>
                  <h3 className="text-lg text-gray-900 mt-0.5">{selectedEvent.title}</h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-gray-400 hover:text-gray-600 ml-4 mt-0.5"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{selectedEvent.detail}</p>
              <button className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800">
                <ExternalLink className="w-3 h-3" />
                Read full article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
