interface Term {
  name: string;
  definition: string;
  category: string;
}

const terms: Term[] = [
  {
    name: 'Contour Line',
    definition: 'A line on a map connecting points of equal elevation above a reference level, typically sea level.',
    category: 'Mapping',
  },
  {
    name: 'Elevation',
    definition: 'The vertical distance of a point above or below a reference surface, usually mean sea level.',
    category: 'Measurement',
  },
  {
    name: 'Relief',
    definition: 'The difference in elevation between the highest and lowest points of a land surface.',
    category: 'Terrain',
  },
  {
    name: 'Gradient',
    definition: 'The rate of change in elevation over a given distance, often expressed as a percentage or angle.',
    category: 'Measurement',
  },
  {
    name: 'Watershed',
    definition: 'An area of land that drains all streams and rainfall to a common outlet such as a river, bay, or ocean.',
    category: 'Hydrology',
  },
  {
    name: 'Theodolite',
    definition: 'A precision optical instrument for measuring angles in horizontal and vertical planes, used in surveying.',
    category: 'Instruments',
  },
  {
    name: 'Digital Elevation Model (DEM)',
    definition: 'A 3D representation of terrain surface created from elevation data points in a digital format.',
    category: 'Technology',
  },
  {
    name: 'Benchmark',
    definition: 'A surveyed point of known elevation used as a reference for measuring other elevations.',
    category: 'Surveying',
  },
  {
    name: 'Topographic Map',
    definition: 'A detailed and accurate representation of natural and man-made features on the Earth\'s surface.',
    category: 'Mapping',
  },
  {
    name: 'Slope',
    definition: 'The steepness or degree of incline of a surface, typically measured in degrees or as a ratio.',
    category: 'Terrain',
  },
  {
    name: 'LiDAR',
    definition: 'Light Detection and Ranging technology that uses laser pulses to measure distances and create precise 3D terrain models.',
    category: 'Technology',
  },
  {
    name: 'Aspect',
    definition: 'The compass direction that a slope faces, important for understanding sunlight exposure and water drainage.',
    category: 'Terrain',
  },
];

const categories = ['All', 'Mapping', 'Measurement', 'Terrain', 'Technology', 'Surveying', 'Instruments', 'Hydrology'];

export function TermsGrid() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl text-gray-900 mb-4">Encyclopedia of Topographic Terms</h2>
        <p className="text-gray-600 mb-6">
          Comprehensive definitions of key concepts and terminology in topography and terrain analysis.
        </p>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                category === 'All'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {terms.map((term) => (
          <div
            key={term.name}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-teal-200 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg text-gray-900">{term.name}</h3>
              <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                {term.category}
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {term.definition}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
