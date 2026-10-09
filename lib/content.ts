// Edit all portfolio copy and case studies here. These are service-led showcases,
// not claims of verified personal employment history or delivered client projects.
export const profile = {
  name: 'Adam Arash Hoglund',
  role: 'Power Systems & Energy Technology',
  email: 'info@hoglundskompetens.se',
  phone: '+46 73 700 11 69',
  location: 'Sweden · Nordics & Europe',
  company: 'Höglunds Kompetens',
  companyUrl: 'https://hoglundskompetens.se/en',
};
export type Project = {slug:string; index:string; title:string; subtitle:string; category:string; year:string; tone:string; eyebrow:string; lead:string; body:string; points:string[]};
export const projects: Project[] = [
 {slug:'battery-energy-storage',index:'01',title:'Battery Energy Storage',subtitle:'From concept to grid connection',category:'BESS Engineering',year:'01',tone:'battery',eyebrow:'ENGINEERING / ENERGY STORAGE',lead:'Making battery energy storage work in the real world.',body:'Technical expertise spanning requirements, system interfaces, engineering coordination and practical implementation for commercial, industrial and utility-scale battery projects.',points:['System architecture and technical specifications','Grid integration and interface coordination','BESS engineering and implementation support']},
 {slug:'energy-management-platform',index:'02',title:'Intelligent EMS',subtitle:'Smarter energy. Better decisions.',category:'Energy Management',year:'02',tone:'ems',eyebrow:'SOFTWARE / ENERGY INTELLIGENCE',lead:'Intelligent control meets the evolving energy market.',body:'Energy management platform capabilities described by Höglunds Kompetens include forecasting, optimization, dispatch, monitoring and multi-market participation.',points:['Price forecasting and market analysis','Optimization and asset dispatch','Live monitoring and scalable operation']},
 {slug:'power-electronics',index:'03',title:'Power Electronics',subtitle:'Engineering what connects it all',category:'Electrical Engineering',year:'03',tone:'power',eyebrow:'ENGINEERING / POWER SYSTEMS',lead:'Power electronics at the center of the energy transition.',body:'Specialist engineering and technical advisory for power-electronic solutions, with attention to interfaces, requirements and reliable integration.',points:['Electrical system interfaces','Technical evaluation and requirements','Coordination with project stakeholders']},
 {slug:'energy-markets',index:'04',title:'Energy Markets & Trading',subtitle:'Unlocking the value of flexibility',category:'Optimization',year:'04',tone:'trading',eyebrow:'STRATEGY / OPTIMIZATION',lead:'Turning flexible energy assets into market-ready systems.',body:'Exploring the intersection of battery operations, energy trading, aggregator architecture and optimization across multiple electricity markets.',points:['Multi-market participation principles','Aggregator solution concepts','Revenue and operational optimization']}
];
