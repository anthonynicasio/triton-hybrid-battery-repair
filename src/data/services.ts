export interface ServicePage {
  slug: string;
  name: string;
  shortDescription: string;
  detail: string;
  includes: string[];
  benefits: string[];
}

export const servicePages: ServicePage[] = [
  {
    slug: 'car-repair-maintenance-service',
    name: 'Car Repair and Maintenance Service',
    shortDescription: 'Complete routine maintenance and mechanical repair for reliable daily driving in Northern Virginia.',
    detail:
      'From inspections and tune-ups to preventive repairs, our Lorton shop keeps your vehicle running safely and efficiently with transparent recommendations.',
    includes: ['Factory-scheduled maintenance', 'Fluid checks and replacements', 'Comprehensive multi-point inspection'],
    benefits: ['Reduce surprise breakdowns', 'Extend vehicle lifespan', 'Get clear service recommendations'],
  },
  {
    slug: 'air-conditioning',
    name: 'Air Conditioning',
    shortDescription: 'Restore cold air performance with AC diagnostics and repair for hot Virginia summers.',
    detail:
      'We diagnose weak airflow, warm cabin air, and leaking refrigerant systems to bring your air conditioning back to peak performance.',
    includes: ['AC performance testing', 'Leak detection and repair', 'Refrigerant recharge (as needed)'],
    benefits: ['Cooler, more comfortable cabin', 'Protect compressor health', 'Improve driving comfort in traffic'],
  },
  {
    slug: 'auto-engine-diagnostic',
    name: 'Auto Engine Diagnostic',
    shortDescription: 'Accurate check-engine-light and drivability diagnostics using professional scan tools and testing.',
    detail:
      'Our technicians combine OBD scanning with hands-on verification to identify the root cause before any repair is recommended.',
    includes: ['Check engine light scan', 'Live data analysis', 'Written findings and repair plan'],
    benefits: ['Avoid parts swapping', 'Faster repair decisions', 'Fix the right issue the first time'],
  },
  {
    slug: 'battery',
    name: 'Battery',
    shortDescription: 'Battery testing, charging-system checks, and replacement service for dependable starts.',
    detail:
      'We inspect battery condition, test charging output, and install quality replacements to prevent no-start situations.',
    includes: ['Battery load test', 'Charging and starting system check', 'Battery replacement and terminal service'],
    benefits: ['Prevent dead-battery surprises', 'Protect electrical components', 'Improve start-up reliability'],
  },
  {
    slug: 'brake-repair',
    name: 'Brake Repair',
    shortDescription: 'Brake inspection and repair services for safer stopping and confident daily driving.',
    detail:
      'If you notice squealing, vibration, or longer stopping distances, we inspect and repair brake components to restore safe braking.',
    includes: ['Pad and rotor inspection', 'Brake fluid and hydraulic checks', 'Brake repair and replacement'],
    benefits: ['Shorter, safer stopping distance', 'Smoother braking feel', 'Reduced rotor and pad wear'],
  },
  {
    slug: 'electrical',
    name: 'Electrical',
    shortDescription: 'Diagnosis and repair of vehicle electrical faults, wiring concerns, and charging issues.',
    detail:
      'Intermittent electrical problems can be difficult to trace. We perform systematic testing to isolate failures and correct them properly.',
    includes: ['Electrical system testing', 'Fuse and relay diagnostics', 'Wiring and connector inspection'],
    benefits: ['Solve intermittent issues', 'Restore reliable electronics', 'Avoid repeated electrical failures'],
  },
  {
    slug: 'electrical-repair',
    name: 'Electrical Repair',
    shortDescription: 'Targeted electrical repairs for power accessories, lighting, and control modules.',
    detail:
      'When a component is confirmed faulty, we complete precise electrical repairs and verify operation before return.',
    includes: ['Wiring repair and replacement', 'Lighting and switch repair', 'Module and circuit fault correction'],
    benefits: ['Restore full electrical function', 'Improve night and weather visibility', 'Protect related circuits'],
  },
  {
    slug: 'exhaust',
    name: 'Exhaust',
    shortDescription: 'Exhaust diagnostics and repair to reduce noise, improve performance, and maintain emissions compliance.',
    detail:
      'Our team identifies leaks, rusted sections, and failing components in the exhaust path, then repairs for proper flow and quieter operation.',
    includes: ['Exhaust leak diagnosis', 'Pipe and component repair', 'Muffler and hardware replacement'],
    benefits: ['Lower cabin noise', 'Better engine efficiency', 'Healthier emissions performance'],
  },
  {
    slug: 'oil-changes',
    name: 'Oil Changes',
    shortDescription: 'Professional oil and filter service to protect engine life and day-to-day performance.',
    detail:
      'Regular oil service is one of the most important ways to protect your engine. We use quality oils and filters matched to your vehicle.',
    includes: ['Oil and filter replacement', 'Fluid level top-off check', 'Reset maintenance indicators'],
    benefits: ['Reduce engine wear', 'Support fuel economy', 'Maintain long-term engine reliability'],
  },
  {
    slug: 'transmission',
    name: 'Transmission',
    shortDescription: 'Transmission diagnostics and service to address shifting issues, slipping, and delayed engagement.',
    detail:
      'We evaluate transmission behavior, fluid condition, and related controls to recommend the right corrective service.',
    includes: ['Transmission performance check', 'Fluid condition inspection', 'Transmission repair recommendations'],
    benefits: ['Smoother shifting', 'Reduced driveline stress', 'Early detection of major issues'],
  },
  {
    slug: 'battery-unit',
    name: 'Battery Unit',
    shortDescription: 'Battery unit testing and service for hybrid systems requiring specialized handling and diagnosis.',
    detail:
      'Our team performs detailed battery unit evaluations to locate weak modules and recommend cost-effective repair or replacement options.',
    includes: ['Battery unit health evaluation', 'Module-level condition checks', 'Repair or replacement strategy'],
    benefits: ['Improve hybrid system reliability', 'Reduce unnecessary full replacement costs', 'Support longer battery life'],
  },
  {
    slug: 'toyota-prius-generation-2-models',
    name: 'Toyota Prius Generation 2 Models',
    shortDescription: 'Specialized diagnostics and repair for Toyota Prius Generation 2 vehicles in the Lorton area.',
    detail:
      'We focus on known Gen 2 Prius patterns, helping owners solve battery, electrical, and drivability issues quickly and accurately.',
    includes: ['Gen 2 Prius-specific diagnostics', 'Hybrid system service and repairs', 'Maintenance guidance for long-term ownership'],
    benefits: ['Work with Prius-experienced technicians', 'Quicker root-cause diagnosis', 'Cost-effective long-term support'],
  },
];

export const topServicePages = servicePages.slice(0, 6);

export const findServiceBySlug = (slug: string) =>
  servicePages.find((service) => service.slug === slug);
