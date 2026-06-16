import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, Layers, MapPin, Mountain, Compass, Cpu, Droplets, BarChart2, Crosshair } from 'lucide-react';

interface Term {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  shortDef: string;
  fullDef: string;
}

const categoryIcons: Record<string, React.ElementType> = {
  Mapping: MapPin,
  Measurement: BarChart2,
  Terrain: Mountain,
  Technology: Cpu,
  Surveying: Crosshair,
  Instruments: Compass,
  Hydrology: Droplets,
  General: Layers,
};

const terms: Term[] = [
  {
    id: 'contour-line',
    name: 'Contour Line',
    category: 'Mapping',
    icon: MapPin,
    shortDef: 'A line connecting points of equal elevation above a reference level.',
    fullDef: 'Contour lines are isolines drawn on topographic maps to connect points at the same elevation above a datum (usually mean sea level). The spacing between contour lines indicates the slope of the terrain: closely-spaced lines indicate steep slopes, while widely-spaced lines indicate gentle slopes or flat areas. Contour intervals — the vertical distance between adjacent contour lines — vary depending on the scale of the map and the relief of the terrain.',
  },
  {
    id: 'elevation',
    name: 'Elevation',
    category: 'Measurement',
    icon: BarChart2,
    shortDef: 'The vertical distance of a point above or below a reference surface, usually mean sea level.',
    fullDef: 'Elevation refers to the height of a geographic location above a fixed reference point, commonly a vertical datum such as mean sea level (MSL). It is measured in meters or feet and is a fundamental attribute of any topographic dataset. Elevation differs from altitude, which typically describes height above ground level rather than the datum. In digital terrain models, elevation values are stored as raster grids or point clouds.',
  },
  {
    id: 'relief',
    name: 'Relief',
    category: 'Terrain',
    icon: Mountain,
    shortDef: 'The difference in elevation between the highest and lowest points of a land surface.',
    fullDef: 'Topographic relief describes the variation in surface elevation across an area and is a key descriptor of landscape character. High-relief terrain, such as mountain ranges, exhibits large elevation differences over short horizontal distances. Low-relief terrain, like alluvial plains, has minimal elevation variation. Relief is often visualized through hillshading (applying simulated light to a DEM) or hypsometric tinting (color-coding elevation bands).',
  },
  {
    id: 'gradient',
    name: 'Gradient',
    category: 'Measurement',
    icon: BarChart2,
    shortDef: 'The rate of change in elevation over a given horizontal distance.',
    fullDef: 'Gradient (or slope gradient) expresses how steeply a surface rises or falls and is calculated as the ratio of vertical rise to horizontal run. It can be expressed as a percentage (rise/run × 100), a ratio (1:n), or in degrees (arctan of rise/run). Gradient analysis is critical in hydrology (predicting runoff velocity), civil engineering (road design), and ecology (understanding habitat distribution on slopes).',
  },
  {
    id: 'watershed',
    name: 'Watershed',
    category: 'Hydrology',
    icon: Droplets,
    shortDef: 'An area of land that drains all water to a common outlet such as a river or ocean.',
    fullDef: 'A watershed (also called a drainage basin or catchment) is defined by topographic divides: ridgelines and high points from which precipitation drains toward a common outlet. Watersheds are hierarchically nested — small sub-watersheds aggregate into larger basins. Delineating watersheds from DEMs is a fundamental GIS task used in flood modeling, water resource management, and ecological studies. The boundary of a watershed is called a drainage divide or watershed boundary.',
  },
  {
    id: 'theodolite',
    name: 'Theodolite',
    category: 'Instruments',
    icon: Compass,
    shortDef: 'A precision optical instrument for measuring horizontal and vertical angles.',
    fullDef: 'The theodolite is the primary instrument of classical surveying, used to measure precise angles in both horizontal and vertical planes. A transit theodolite can be rotated 360° in the horizontal plane (azimuth) and read angles to fractions of an arc-second. Modern total stations combine a theodolite with an electronic distance measurement (EDM) unit, enabling automated data collection. Theodolites form the basis of triangulation networks used to establish national geodetic control frameworks.',
  },
  {
    id: 'dem',
    name: 'Digital Elevation Model (DEM)',
    category: 'Technology',
    icon: Cpu,
    shortDef: 'A 3D digital representation of terrain surface created from elevation data points.',
    fullDef: 'A Digital Elevation Model is a raster dataset in which each cell contains the elevation value of the terrain surface at that location. DEMs are distinguished from Digital Surface Models (DSMs), which capture the tops of buildings and vegetation, and Digital Terrain Models (DTMs), which include additional vector features like breaklines. Sources include satellite radar (SRTM), stereo photogrammetry, and airborne LiDAR. Resolution ranges from 30-meter global grids to sub-centimeter local surveys.',
  },
  {
    id: 'benchmark',
    name: 'Benchmark',
    category: 'Surveying',
    icon: Crosshair,
    shortDef: 'A surveyed point of known elevation used as a reference for measuring other elevations.',
    fullDef: 'A benchmark is a physical marker — typically a brass disk set in concrete or bedrock — whose elevation above a vertical datum has been determined by precise leveling surveys. Benchmarks form the backbone of national vertical control networks. In the United States, the National Geodetic Survey (NGS) maintains over 700,000 benchmarks. Surveyors use benchmarks as starting or closing points for differential leveling runs, ensuring that new elevation measurements are tied to the national datum.',
  },
  {
    id: 'topographic-map',
    name: 'Topographic Map',
    category: 'Mapping',
    icon: MapPin,
    shortDef: 'A detailed map representing natural and man-made features of the Earth\'s surface.',
    fullDef: 'Topographic maps depict the three-dimensional shape of the terrain using contour lines, combined with a planimetric representation of cultural and natural features such as roads, buildings, rivers, vegetation, and administrative boundaries. They are the primary tool for outdoor navigation, engineering surveys, military planning, and natural resource management. Standard topographic map series — such as the USGS 7.5-minute quadrangles — cover the entire United States at 1:24,000 scale.',
  },
  {
    id: 'slope',
    name: 'Slope',
    category: 'Terrain',
    icon: Mountain,
    shortDef: 'The steepness or degree of incline of a surface, measured in degrees or as a ratio.',
    fullDef: 'Slope is a two-dimensional measurement of surface inclination, computed from the first derivative of a DEM. It is typically expressed in degrees (0° = flat, 90° = vertical) or as a percentage. Slope analysis is used in erosion modeling (steeper slopes generate higher shear stress), agricultural suitability mapping, landslide hazard assessment, and solar energy site evaluation. Slope maps are commonly generated using ArcGIS, QGIS, or GDAL tools applied to raster elevation datasets.',
  },
  {
    id: 'lidar',
    name: 'LiDAR',
    category: 'Technology',
    icon: Cpu,
    shortDef: 'Light Detection and Ranging — uses laser pulses to create precise 3D terrain models.',
    fullDef: 'LiDAR (Light Detection and Ranging) systems emit rapid laser pulses and record the time each pulse takes to return after reflecting from a surface. Airborne LiDAR systems mounted on aircraft or drones can collect millions of points per second, producing point clouds with centimeter-level accuracy. By filtering for ground returns (and removing vegetation and building returns), surveyors generate "bare-earth" DEMs that reveal terrain hidden under forest canopy — invaluable for archaeology, flood modeling, and fault mapping.',
  },
  {
    id: 'aspect',
    name: 'Aspect',
    category: 'Terrain',
    icon: Mountain,
    shortDef: 'The compass direction a slope faces — important for sunlight exposure and drainage.',
    fullDef: 'Aspect is the azimuthal direction of a slope face, measured clockwise from north (0°–360°). It is derived as the second spatial derivative of a DEM. South-facing slopes in the northern hemisphere receive more direct solar radiation, leading to warmer, drier microclimates compared to north-facing slopes. Aspect profoundly influences vegetation communities, snow melt patterns, permafrost distribution, and agricultural microclimate management. It is a standard output of terrain analysis in GIS platforms.',
  },
];

const categories = ['All', 'Mapping', 'Measurement', 'Terrain', 'Technology', 'Surveying', 'Instruments', 'Hydrology'];

export function Encyclopedia() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? terms : terms.filter((t) => t.category === activeCategory);

  return (
    <section>
      {/* Section header */}
      <div className="mb-6">
        <h2 className="text-xl text-gray-900 mb-1">Encyclopedia of Topographic Terms</h2>
        <p className="text-sm text-gray-500">Click any term to expand its full definition.</p>
      </div>

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs transition-colors border ${
              activeCategory === cat
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion list */}
      <Accordion.Root type="multiple" className="border border-gray-200 rounded-lg divide-y divide-gray-200 overflow-hidden">
        {filtered.map((term) => {
          const Icon = categoryIcons[term.category] ?? Layers;
          return (
            <Accordion.Item key={term.id} value={term.id}>
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center gap-4 px-5 py-4 bg-white hover:bg-gray-50 transition-colors group text-left [&[data-state=open]>div>svg.chevron]:rotate-180">
                  {/* Category icon */}
                  <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>

                  {/* Term name + short def */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-900">{term.name}</span>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{term.category}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5 truncate">{term.shortDef}</p>
                  </div>

                  {/* Expand chevron */}
                  <div>
                    <ChevronDown className="chevron w-4 h-4 text-gray-400 transition-transform duration-200" />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="overflow-hidden data-[state=open]:animate-[accordionOpen_150ms_ease-out] data-[state=closed]:animate-[accordionClose_150ms_ease-in]">
                <div className="px-5 pb-5 pt-1 bg-gray-50 border-t border-gray-100">
                  <p className="text-sm text-gray-700 leading-relaxed max-w-3xl">
                    {term.fullDef}
                  </p>
                  <button className="mt-3 text-xs text-blue-600 hover:text-blue-800 transition-colors">
                    View related terms →
                  </button>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </section>
  );
}
